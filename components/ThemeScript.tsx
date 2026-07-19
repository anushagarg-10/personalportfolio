// Sets the saved theme on <html> before hydration to avoid a flash.
export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
