import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'social-network',
    num: '01',
    title: 'Social Networking & Relationship Platform',
    category: 'Backend',
    role: 'Team Lead & Backend Developer',
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'React', 'Flutter'],
    summary:
      'A multi-purpose social platform supporting friendship, volunteering, and dating workflows with real-time communication capabilities.',
    highlights: [
      'Led backend development and coordinated directly with the client and cross-functional development team.',
      'Designed APIs and database architecture supporting friendship, volunteering, and dating relationship workflows.',
      'Implemented social posts, video uploads, real-time chat, and WebRTC-based video calling capabilities.',
      'Guided technical implementation and optimized backend services for scalability and long-term maintainability.',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: 'Users',
  },
  {
    id: 'fuel-fleet',
    num: '02',
    title: 'Fuel Fleet Management System',
    category: 'Backend',
    role: 'Team Lead & Backend Developer',
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'AWS'],
    summary:
      'Enterprise fleet management system covering fuel tracking, driver activity, mileage, and breakdown workflows for large vehicle fleets.',
    highlights: [
      'Designed end-to-end workflows for vehicle, fuel, mileage, breakdown, and driver activity management.',
      'Implemented fuel tracking and mileage APIs with highly optimized SQL queries for performance at scale.',
      'Implemented cursor-based pagination for efficient handling of large datasets without performance degradation.',
      'Led technical delivery and collaborated directly with the client on requirements, solutions, and issue resolution.',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: 'Truck',
  },
  {
    id: 'community-social',
    num: '03',
    title: 'Community Social Platform',
    category: 'Backend',
    role: 'Backend Developer',
    stack: ['Node.js', 'Hasura', 'PostgreSQL', 'GraphQL'],
    summary:
      'A high-volume community platform supporting posts, questions, polls, quizzes, and rich social interactions with optimized database architecture.',
    highlights: [
      'Refactored backend architecture and optimized database interactions to improve API performance and system stability.',
      'Built scalable services supporting posts, questions, polls, quizzes, likes, comments, shares, follows, and blocking.',
      'Optimized queries and database operations for high-volume concurrent user interactions.',
    ],
    featured: true,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: 'MessageSquare',
  },
  {
    id: 'real-estate',
    num: '04',
    title: 'Real Estate Lead Management Platform',
    category: 'Backend',
    role: 'Backend Developer',
    stack: ['Node.js', 'Express.js', 'Hasura', 'PostgreSQL', 'Redis', 'GraphQL'],
    summary:
      'Full-featured real estate platform managing the complete sales pipeline from property discovery through booking and agreement finalization.',
    highlights: [
      'Developed GraphQL workflows for property, buyer, channel partner, lead, site visit, booking, and agreement management.',
      'Implemented JWT-based authentication and fine-grained authorization across all platform modules.',
      'Optimized backend workflows and database interactions using PostgreSQL and Redis for improved response times.',
    ],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: 'Home',
  },
  {
    id: 'networking-matching',
    num: '05',
    title: 'Networking & Matching Platform',
    category: 'Full Stack',
    role: 'Full Stack Developer',
    stack: ['React Native', 'Supabase', 'PostgreSQL', 'TypeScript', 'WebRTC'],
    summary:
      'Cross-platform mobile application supporting dating, social, and business networking modes with intelligent matching and real-time communication.',
    highlights: [
      'Built backend and mobile features supporting Dating, Social, and Business networking discovery modes.',
      'Designed matching and discovery workflows using PostgreSQL functions and optimized database queries.',
      'Implemented authentication, Row Level Security, role-based access control, real-time messaging, push notifications, and WebRTC voice/video calling.',
      'Managed Supabase database, storage, authentication, Edge Functions, and full deployment workflows.',
    ],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    icon: 'Network',
  },
  {
    id: 'print-portal',
    num: '06',
    title: 'Custom Print Order & Business Portal',
    category: 'Full Stack',
    role: 'Full Stack Developer',
    stack: ['NestJS', 'Next.js', 'Hasura', 'PostgreSQL', 'Strapi', 'Stripe', 'Xero', 'PrintLogic'],
    summary:
      'Dual-portal web platform for customized print order management, integrating payment processing, accounting, and production workflows.',
    highlights: [
      'Developed customer and business portals for end-to-end customized print-order management.',
      'Implemented credit-based payments using Stripe and integrated Xero for accounting and invoice synchronization.',
      'Integrated PrintLogic production workflows and maintained full audit history for operational traceability.',
      'Optimized GraphQL APIs, database queries, and application workflows for reliability and performance.',
    ],
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    icon: 'Printer',
  },
  {
    id: 'rewards-giftcard',
    num: '07',
    title: 'Rewards & Gift Card Management System',
    category: 'Backend',
    role: 'Backend Developer',
    stack: ['NestJS', 'Drizzle', 'PostgreSQL', 'SQL', 'Cognito', 'StriveCloud'],
    summary:
      'Large-scale rewards and gift card platform involving a major data migration, gamification integrations, and third-party service orchestration.',
    highlights: [
      'Executed migration of 500K+ users and ~2M records from a legacy SQL database to PostgreSQL using structured migration scripts.',
      'Designed migration workflows ensuring data consistency and reliability across all records at scale.',
      'Implemented Amazon Cognito authentication and comprehensive user management flows.',
      'Integrated StriveCloud for tokenomics, gamification, and third-party offers and gift-card service orchestration.',
      'Optimized SQL queries and database operations for large-scale migration and rewards workflows.',
    ],
    gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    icon: 'Gift',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
