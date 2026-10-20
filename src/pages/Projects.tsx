import { motion } from 'framer-motion';
import {
  Users, Truck, MessageSquare, Home, Network, Printer, Gift, Server,
} from 'lucide-react';
import { projects } from '../data/projects';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={22} />,
  Truck: <Truck size={22} />,
  MessageSquare: <MessageSquare size={22} />,
  Home: <Home size={22} />,
  Network: <Network size={22} />,
  Printer: <Printer size={22} />,
  Gift: <Gift size={22} />,
  Server: <Server size={22} />,
};

export default function Projects() {
  return (
    <main aria-label="Projects">
      <div className="container" style={{ paddingTop: 60, paddingBottom: 88 }}>

        <div className="section-header">
          <div className="eyebrow">Project Experience</div>
          <h1 className="section-title">Professional Work</h1>
          <p className="section-desc">
            Production systems I've designed, built, and led. All projects represent real client
            work — details kept high-level where confidential.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="proj-full"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.4), ease: [0.25, 0.1, 0.25, 1] }}
              aria-label={project.title}
            >
              {/* Gradient thumbnail */}
              <div className="proj-full__thumb" style={{ background: project.gradient }}>
                <div className="proj-full__thumb-grid" />
                <div className="proj-full__thumb-icon" aria-hidden="true">
                  {iconMap[project.icon] ?? <Server size={22} />}
                </div>
                <div className="proj-full__thumb-badges">
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.7)',
                      letterSpacing: 1,
                    }}
                  >
                    {project.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.9)',
                      background: 'rgba(5,8,16,0.5)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      padding: '3px 10px',
                      borderRadius: 5,
                      backdropFilter: 'blur(8px)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="proj-full__body">
                <div className="proj-full__header">
                  <div>
                    <h2 className="proj-full__title">{project.title}</h2>
                    <div className="proj-full__role">{project.role}</div>
                  </div>
                </div>

                <p className="proj-full__desc">{project.summary}</p>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 11,
                      color: 'var(--text-3)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: 10,
                    }}
                  >
                    Key Contributions
                  </div>
                  <ul className="proj-full__highlights">
                    {project.highlights.map((hl) => (
                      <li key={hl} className="proj-full__hl">{hl}</li>
                    ))}
                  </ul>
                </div>

                <div className="proj-full__stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
