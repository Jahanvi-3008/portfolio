import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'Code',
    skills: ['TypeScript', 'JavaScript', 'SQL'],
    emphasis: ['TypeScript', 'SQL'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices'],
    emphasis: ['Node.js', 'NestJS'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
    emphasis: ['PostgreSQL'],
  },
  {
    title: 'ORM & Data Access',
    icon: 'Layers',
    skills: ['TypeORM', 'Prisma', 'Drizzle'],
    emphasis: ['TypeORM', 'Prisma'],
  },
  {
    title: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'Next.js'],
    emphasis: [],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: ['AWS', 'Docker'],
    emphasis: [],
  },
  {
    title: 'Architecture',
    icon: 'GitBranch',
    skills: [
      'Clean Architecture',
      'OOP',
      'Design Patterns',
      'Event-Driven Architecture',
      'Queues',
      'Caching',
      'Database Optimization',
    ],
    emphasis: ['Database Optimization', 'Clean Architecture'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Swagger', 'Jira', 'Trello'],
    emphasis: [],
  },
];
