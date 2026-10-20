import type { Achievement, Milestone } from '../types';

export const awards: Achievement[] = [
  {
    title: 'Project Ownership Champion',
    date: 'January 2026',
    description:
      'Recognized for exceptional ownership and accountability across multiple product deliveries, from technical architecture through production support.',
  },
  {
    title: 'Client Appreciation Award',
    date: 'November 2025',
    description:
      'Awarded for outstanding client communication, proactive issue resolution, and consistently exceeding expectations in project delivery.',
  },
  {
    title: 'Impact Contributor Award',
    date: 'May 2025',
    description:
      'Acknowledged for high-impact technical contributions that significantly improved system performance, reliability, and team velocity.',
  },
];

export const milestones: Milestone[] = [
  {
    title: 'Large-Scale Data Migration',
    description:
      'Successfully migrated 500K+ users and ~2M records from a legacy SQL database to PostgreSQL while maintaining full data consistency and zero-downtime production delivery.',
    icon: 'Database',
  },
  {
    title: 'Backend Architecture & Optimization',
    description:
      'Refactored complex backend systems, reducing unnecessary database connections and measurably improving API performance and system stability across multiple products.',
    icon: 'Zap',
  },
  {
    title: 'End-to-End Project Ownership',
    description:
      'Led multiple projects from initial requirement analysis and architecture design through development, client communication, delivery, and production support.',
    icon: 'Target',
  },
  {
    title: 'AI Engineering — HealOps',
    description:
      'Contributed to HealOps, an AI-powered self-healing CI/CD pipeline capable of autonomously diagnosing and resolving build failures without human intervention.',
    icon: 'Cpu',
  },
  {
    title: 'Technical Leadership',
    description:
      'Led development teams, conducted thorough code reviews, mentored junior developers, and drove backend architecture decisions across concurrent product workstreams.',
    icon: 'Users',
  },
];
