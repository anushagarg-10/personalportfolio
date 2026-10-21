"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * A hand-rolled WebGL centerpiece: a noise-displaced icosahedron ("the build")
 * with a fresnel glass shader, orbited by wireframe fragments ("the parts").
 * Built with raw three.js (no scene-graph framework) to match the rest of the
 * codebase's hand-rolled canvas work, and as a nod to the ray-tracing /
 * path-tracing coursework mentioned in the About section.
 */

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  varying vec3 vNormal;
  varying vec3 vViewPos;

  // Ashima/McEwan classic 3D simplex noise (public-domain reference impl)
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
      +i.y+vec4(0.0,i1.y,i2.y,1.0))
      +i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main(){
    vec3 p = position;
    float n = snoise(p * 1.35 + uTime * 0.12);
    float displacement = n * (0.16 + uMorph * 0.22);
    vec3 displaced = p + normal * displacement;
    vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
    vViewPos = -mv.xyz;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vViewPos;

  void main(){
    vec3 viewDir = normalize(vViewPos);
    float fresnel = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), 2.1);
    float sweep = normalize(vNormal).y * 0.5 + 0.5;
    vec3 base = mix(uColorA, uColorB, sweep);
    vec3 rim = mix(base, uColorC, fresnel);
    vec3 col = base * 0.42 + rim * (0.5 + fresnel * 0.7);
    float alpha = clamp(0.16 + fresnel * 0.92, 0.0, 0.94) * uOpacity;
    gl_FragColor = vec4(col, alpha);
  }
`;

const THEME = {
  dark: { a: 0xff5c9d, b: 0xc77dff, c: 0xffeef6 },
  light: { a: 0xe0508f, b: 0xf7a8c9, c: 0xfff1f7 },
};

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const hero = mount?.closest("section");
    if (!mount || !hero) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      return; // no WebGL — CSS orb backdrop already covers the visual
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const isLight = () => document.documentElement.getAttribute("data-theme") === "light";
    const palette = () => THEME[isLight() ? "light" : "dark"];

    const uniforms = {
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uOpacity: { value: 1 },
      uColorA: { value: new THREE.Color(palette().a) },
      uColorB: { value: new THREE.Color(palette().b) },
      uColorC: { value: new THREE.Color(palette().c) },
    };

    const coreGeo = new THREE.IcosahedronGeometry(1.55, 5);
    const coreMat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthWrite: false,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // orbiting fragments — "the parts assembling into the whole"
    const fragGroup = new THREE.Group();
    const fragGeos = [
      new THREE.OctahedronGeometry(0.22),
      new THREE.TetrahedronGeometry(0.2),
      new THREE.IcosahedronGeometry(0.16, 0),
      new THREE.OctahedronGeometry(0.18),
    ];
    const frags: { mesh: THREE.Mesh; radius: number; speed: number; offset: number; tilt: number }[] = [];
    fragGeos.forEach((g, i) => {
      const mat = new THREE.MeshBasicMaterial({
        color: [palette().a, palette().b, palette().c, palette().a][i],
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      });
      const mesh = new THREE.Mesh(g, mat);
      fragGroup.add(mesh);
      frags.push({
        mesh,
        radius: 2.5 + i * 0.35,
        speed: 0.18 + i * 0.05,
        offset: (i / fragGeos.length) * Math.PI * 2,
        tilt: 0.3 + i * 0.15,
      });
    });
    scene.add(fragGroup);

    // On wide screens, park the scene behind the video card (right column) so
    // it never sits behind the headline and intro copy on the left.
    let offsetX = 0;
    function fitCamera() {
      const w = mount!.clientWidth || 1;
      const h = mount!.clientHeight || 1;
      offsetX = w > 900 ? 1.75 : 0;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }

    const ro = new ResizeObserver(fitCamera);
    ro.observe(mount);
    fitCamera();

    const mouse = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      targetRot.y = mouse.x * 0.35;
      targetRot.x = mouse.y * -0.22;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let scrollT = 0;
    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const total = rect.height || 1;
      scrollT = Math.min(1, Math.max(0, -rect.top / total));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // click anywhere in the hero to send a shatter pulse through the build
    let burst = 0;
    const onClick = () => {
      burst = 1;
    };
    if (!reduce) hero.addEventListener("click", onClick);

    const mo = new MutationObserver(() => {
      const p = palette();
      uniforms.uColorA.value.set(p.a);
      uniforms.uColorB.value.set(p.b);
      uniforms.uColorC.value.set(p.c);
      frags.forEach((f, i) => {
        (f.mesh.material as THREE.MeshBasicMaterial).color.set(
          [p.a, p.b, p.c, p.a][i]
        );
      });
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver((entries) => (visible = entries[0]?.isIntersecting ?? true), {
      threshold: 0,
    });
    io.observe(hero);

    const clock = new THREE.Clock();
    function render() {
      const t = clock.getElapsedTime();
      burst *= 0.93;
      uniforms.uTime.value = t;
      uniforms.uMorph.value = 0.4 + Math.sin(t * 0.3) * 0.25 + burst * 0.85;
      uniforms.uOpacity.value = 1 - scrollT * 0.9;

      core.rotation.x += (targetRot.x - core.rotation.x) * 0.04 + burst * 0.02;
      core.rotation.y += (targetRot.y - core.rotation.y + t * 0.05 - core.rotation.y * 0) * 0.04 + burst * 0.03;
      core.position.x = offsetX;
      core.position.y = scrollT * -1.4;
      core.scale.setScalar(1 + scrollT * 0.35 + burst * 0.22);

      const kick = burst * 1.6;
      frags.forEach((f) => {
        const a = t * f.speed + f.offset;
        const r = f.radius + kick;
        f.mesh.position.set(
          Math.cos(a) * r,
          Math.sin(a * 0.7) * r * 0.5,
          Math.sin(a) * r * 0.6
        );
        f.mesh.rotation.x = a * 0.8 + burst * 2;
        f.mesh.rotation.y = a * 0.6 + burst * 2;
      });
      fragGroup.position.x = offsetX;
      fragGroup.position.y = scrollT * -1.8;
      fragGroup.rotation.y = t * 0.05;

      renderer.render(scene, camera);
      if (!reduce && visible && !document.hidden) raf = requestAnimationFrame(render);
    }

    render();
    if (reduce) {
      // static single frame: hold a gentle mid-morph pose, no loop
      uniforms.uMorph.value = 0.45;
      renderer.render(scene, camera);
    }

    const onVis = () => {
      if (!document.hidden && !reduce && visible) {
        cancelAnimationFrame(raf);
        render();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      hero.removeEventListener("click", onClick);
      document.removeEventListener("visibilitychange", onVis);
      coreGeo.dispose();
      coreMat.dispose();
      fragGeos.forEach((g) => g.dispose());
      frags.forEach((f) => (f.mesh.material as THREE.Material).dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero3d-mount" aria-hidden="true" />;
}
