const ITEMS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Prisma",
  "Node.js",
  "PostgreSQL",
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
