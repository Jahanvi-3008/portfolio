import { motion, useReducedMotion } from 'framer-motion';
import { Trophy, Database, Zap, Target, Cpu, Users } from 'lucide-react';
import { awards, milestones } from '../data/achievements';
import { useReveal } from '../hooks/useReveal';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database size={20} />,
  Zap: <Zap size={20} />,
  Target: <Target size={20} />,
  Cpu: <Cpu size={20} />,
  Users: <Users size={20} />,
};

export default function Achievements() {
  const { ref: awardsRef, visible: awardsVisible } = useReveal();
  const { ref: milesRef, visible: milesVisible } = useReveal();
  const shouldReduce = useReducedMotion();

  return (
    <main aria-label="Awards and achievements">
      <div className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>

        {/* Recognition */}
        <div className="section-header">
          <div className="eyebrow">Recognition</div>
          <h1 className="section-title">Awards & Achievements</h1>
          <p className="section-desc">
            Recognition from GeekyAnts for technical ownership, client impact, and engineering contributions.
          </p>
        </div>

        <div className="awards-grid" ref={awardsRef}>
          {awards.map((award, i) => (
            <motion.article
              key={award.title}
              className="award-card"
              initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
              animate={awardsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.13, ease: [0.25, 0.1, 0.25, 1] }}
              aria-label={award.title}
            >
              <div className="award-icon" aria-hidden="true">
                <Trophy size={24} />
              </div>
              <div className="award-date">{award.date}</div>
              <h2 className="award-title">{award.title}</h2>
              <p className="award-desc">{award.description}</p>
            </motion.article>
          ))}
        </div>

        {/* Key Milestones */}
        <div style={{ marginTop: 16 }} ref={milesRef}>
          <div className="eyebrow">Key Milestones</div>
          <h2 className="section-title">Engineering Impact</h2>
          <div className="milestones-grid">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                className="milestone-card"
                initial={{ opacity: 0, x: shouldReduce ? 0 : (i % 2 === 0 ? -20 : 20) }}
                animate={milesVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="milestone-icon" aria-hidden="true">
                  {iconMap[m.icon] ?? <Trophy size={20} />}
                </div>
                <div>
                  <h3 className="milestone-title">{m.title}</h3>
                  <p className="milestone-desc">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
