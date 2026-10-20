const techs = [
  'Node.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'GraphQL',
  'REST APIs', 'AWS', 'Docker', 'Redis', 'Prisma',
  'TypeORM', 'Microservices', 'Drizzle', 'SQL', 'Clean Architecture',
];

export default function TechMarquee() {
  const doubled = [...techs, ...techs];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <span key={i} className="marquee-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
