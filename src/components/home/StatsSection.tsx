import { motion } from 'framer-motion';
import { Clock, Users, Database, Trophy } from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';

interface StatProps {
  label: string;
  suffix: string;
  target: number;
  icon: React.ReactNode;
  delay: number;
}

function StatCard({ label, suffix, target, icon, delay }: StatProps) {
  const { ref, count } = useCounter(target, 1800);

  return (
    <motion.div
      className="stat-card"
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="stat-card__icon">{icon}</div>
      <div className="stat-card__num" aria-label={`${count}${suffix}`}>
        {count}{suffix}
      </div>
      <div className="stat-card__label">{label}</div>
    </motion.div>
  );
}

const stats = [
  { label: 'Years of Experience', suffix: '+', target: 4, icon: <Clock size={22} /> },
  { label: 'Users Migrated', suffix: 'K+', target: 500, icon: <Users size={22} /> },
  { label: 'Records Migrated', suffix: 'M+', target: 2, icon: <Database size={22} /> },
  { label: 'Recognition Awards', suffix: '', target: 3, icon: <Trophy size={22} /> },
];

export default function StatsSection() {
  return (
    <section className="section--alt" style={{ padding: '64px 0' }} aria-label="Professional highlights">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
