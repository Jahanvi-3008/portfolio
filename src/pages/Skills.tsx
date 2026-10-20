import { motion } from 'framer-motion';
import { Code, Server, Database, Layers, Monitor, Cloud, GitBranch, Wrench } from 'lucide-react';
import { skillGroups } from '../data/skills';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={18} />,
  Server: <Server size={18} />,
  Database: <Database size={18} />,
  Layers: <Layers size={18} />,
  Monitor: <Monitor size={18} />,
  Cloud: <Cloud size={18} />,
  GitBranch: <GitBranch size={18} />,
  Wrench: <Wrench size={18} />,
};

const primaryTechs = [
  { name: 'Node.js', color: 'var(--violet)' },
  { name: 'NestJS', color: 'var(--violet)' },
  { name: 'PostgreSQL', color: 'var(--cyan)' },
  { name: 'TypeScript', color: 'var(--cyan)' },
  { name: 'SQL', color: 'var(--rose)' },
];

export default function Skills() {
  return (
    <main aria-label="Technical skills">
      <div className="container" style={{ paddingTop: 60, paddingBottom: 88 }}>

        <div className="section-header">
          <div className="eyebrow">Technical Skills</div>
          <h1 className="section-title">Technology Stack</h1>
          <p className="section-desc">
            Tools and technologies I work with. Primary focus: Node.js, NestJS, PostgreSQL,
            and TypeScript — with strong SQL and database optimization expertise.
          </p>
        </div>

        {/* Primary techs — visual strip */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            padding: '28px 32px',
            borderRadius: 'var(--r-xl)',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.09) 0%, rgba(34,211,238,0.06) 100%)',
            border: '1px solid rgba(99,102,241,0.2)',
            marginBottom: 40,
            position: 'relative',
            overflow: 'hidden',
          }}
          aria-label="Primary expertise"
        >
          {/* Dot pattern */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: 10,
                letterSpacing: 1.8,
                textTransform: 'uppercase',
                color: 'var(--violet)',
                marginBottom: 14,
              }}
            >
              Primary Expertise
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {primaryTechs.map((tech) => (
                <span
                  key={tech.name}
                  className="tag tag-v"
                  style={{ fontSize: 13.5, padding: '6px 16px', fontWeight: 600 }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-grid" aria-label="Skill categories">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="skill-group"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.07, 0.42), ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="skill-group__title">
                <span className="skill-group__icon">{iconMap[group.icon]}</span>
                {group.title}
              </div>
              <div className="skill-group__chips" role="list" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className={`skill-chip${group.emphasis.includes(skill) ? ' emphasis' : ''}`}
                    aria-label={`${skill}${group.emphasis.includes(skill) ? ' — primary expertise' : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'var(--f-mono)',
            fontSize: 11.5,
            color: 'var(--text-3)',
            textAlign: 'center',
            marginTop: 52,
            letterSpacing: 0.3,
          }}
        >
          Highlighted chips indicate primary expertise. No fabricated proficiency bars.
        </p>
      </div>
    </main>
  );
}
