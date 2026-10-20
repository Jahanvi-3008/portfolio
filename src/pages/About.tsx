import { motion } from 'framer-motion';
import {
  Database, Server, Zap, GitBranch, BookOpen,
  MapPin, Building, GraduationCap, Mail, Code, Layers,
} from 'lucide-react';

const focusAreas = [
  { icon: <Database size={22} />, title: 'Data-First Engineering', desc: 'Schema design, SQL optimization, query tuning, indexing, and database architecture as the foundation of every system.' },
  { icon: <Server size={22} />, title: 'Backend Architecture', desc: 'Building clean, maintainable NestJS & Node.js systems with strong separation of concerns and long-term scalability.' },
  { icon: <Zap size={22} />, title: 'API Development', desc: 'REST and GraphQL APIs that are consistent, well-documented, and built for performance and developer experience.' },
  { icon: <Code size={22} />, title: 'Performance Optimization', desc: 'Identifying and resolving bottlenecks in APIs, database interactions, and data access patterns in production.' },
  { icon: <GitBranch size={22} />, title: 'Technical Leadership', desc: 'Leading backend development, code reviews, mentoring engineers, and collaborating directly with clients.' },
  { icon: <BookOpen size={22} />, title: 'Continuous Learning', desc: 'Actively exploring AI engineering and distributed systems — with contributions to an AI-powered self-healing CI/CD pipeline.' },
];

const education = [
  { degree: 'MBA in Information Technology', school: 'Amity University, Noida', period: '2023 – 2025', grade: 'A+' },
  { degree: 'B.E. in Computer Science Engineering', school: 'Chitkara University, Rajpura', period: '2019 – 2023', grade: '9.99 CGPA' },
];

function Avatar() {
  return (
    <div
      style={{
        width: 90, height: 90, borderRadius: '50%', position: 'relative', marginBottom: 20, flexShrink: 0,
      }}
    >
      {/* Spinning gradient ring */}
      <div
        style={{
          position: 'absolute', inset: -3, borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366F1, #22D3EE, #FB7185)',
          animation: 'spin 6s linear infinite',
        }}
        aria-hidden="true"
      />
      {/* Inner circle */}
      <div
        style={{
          position: 'absolute', inset: 3, borderRadius: '50%',
          background: 'var(--bg-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <span style={{
          background: 'linear-gradient(135deg, #818CF8, #22D3EE)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'var(--f-head)',
          fontWeight: 800,
          fontSize: 36,
        }}>J</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main aria-label="About me">
      <div className="container" style={{ paddingTop: 60, paddingBottom: 88 }}>

        {/* Page header */}
        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow">About Me</div>
          <h1 className="section-title">The Engineer Behind the Systems</h1>
        </div>

        {/* Main bento intro grid */}
        <div className="bento-grid" style={{ marginBottom: 72 }}>

          {/* Bio card — spans 2 columns */}
          <div className="bento-card span-2" style={{ position: 'relative', overflow: 'hidden' }}>
            <div
              style={{
                position: 'absolute', top: -60, right: -60,
                width: 200, height: 200, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <Avatar />
              <div style={{ flex: 1, minWidth: 200 }}>
                <h2
                  style={{
                    fontFamily: 'var(--f-head)', fontSize: 32, fontWeight: 800,
                    letterSpacing: '-1px', marginBottom: 4,
                    background: 'linear-gradient(135deg, var(--text-1), var(--text-2))',
                    WebkitBackgroundClip: 'text', backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Jahanvi
                </h2>
                <div style={{ fontFamily: 'var(--f-mono)', fontSize: 13, color: 'var(--violet)', marginBottom: 16 }}>
                  Senior Software Engineer II · GeekyAnts
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.78, marginBottom: 12 }}>
                  Backend-focused engineer with 4+ years designing scalable APIs, microservices,
                  and database architectures. I turn complex product and data challenges into
                  reliable systems that perform under real-world conditions.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.78, marginBottom: 0 }}>
                  I've led backend development across multiple client products at GeekyAnts,
                  owned features from architecture through production, and executed a large-scale
                  migration of 500K+ users from legacy SQL to PostgreSQL.
                </p>
              </div>
            </div>
          </div>

          {/* Status card */}
          <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 4 }}>Quick Info</div>
            {[
              { icon: <Building size={15} />, label: 'Company', value: 'GeekyAnts' },
              { icon: <Layers size={15} />, label: 'Level', value: 'Senior Software Engineer II' },
              { icon: <MapPin size={15} />, label: 'Location', value: 'India' },
              { icon: <Mail size={15} />, label: 'Email', value: 'jahanvi.s1234@gmail.com' },
              { icon: <GraduationCap size={15} />, label: 'Education', value: 'MBA IT · B.E. CSE' },
            ].map((info) => (
              <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ color: 'var(--violet)', flexShrink: 0, marginTop: 1 }}>{info.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: 1 }}>{info.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-1)', fontWeight: 500 }}>{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats strip — full width */}
          <div className="bento-card span-2" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(34,211,238,0.06))' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 18 }}>At a Glance</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, textAlign: 'center' }}>
              {[
                { n: '4+', l: 'Years Experience' },
                { n: '7', l: 'Products Shipped' },
                { n: '500K+', l: 'Users Migrated' },
                { n: '3', l: 'Awards Won' },
              ].map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--f-head)', fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, var(--violet), var(--cyan))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional bio */}
          <div className="bento-card">
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: 12 }}>Beyond Backend</div>
            <p style={{ fontSize: 14, lineHeight: 1.75 }}>
              Additional experience with React, Next.js, React Native, Supabase, AI integrations,
              and cloud deployments. Contributed to HealOps — an AI-powered self-healing CI/CD pipeline.
            </p>
          </div>

        </div>

        {/* Technical Focus */}
        <div style={{ marginBottom: 72 }}>
          <div className="eyebrow">Technical Focus</div>
          <h2 className="section-title">What I Do Best</h2>
          <div className="focus-grid">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                className="focus-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="focus-icon">{area.icon}</div>
                <h3 className="focus-title">{area.title}</h3>
                <p className="focus-desc">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="eyebrow">Education</div>
          <h2 className="section-title">Academic Background</h2>
          <div className="edu-grid">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="edu-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="edu-deg">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-meta">
                  <span className="edu-badge">{edu.period}</span>
                  <span className="edu-badge gold">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
