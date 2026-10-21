const ITEMS = [
  "Figma",
  "Next.js",
  "Design systems",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Prisma",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "Essential Eight",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mtrack">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
