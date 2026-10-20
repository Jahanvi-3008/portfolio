import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import FeaturedWriting from '../components/home/FeaturedWriting';
import TechMarquee from '../components/home/TechMarquee';

export default function Home() {
  return (
    <main aria-label="Home">
      <HeroSection />
      <TechMarquee />
      <StatsSection />
      <FeaturedProjects />

      {/* Quick About — bento-style */}
      <section className="section section--alt" aria-label="About summary">
        <div className="container">
          <div className="quick-about">
            <div>
              <div
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 11,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--violet)',
                  marginBottom: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: 20,
                    height: 1,
                    background: 'var(--violet)',
                  }}
                />
                About Me
              </div>
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 800,
                  marginBottom: 16,
                  letterSpacing: '-0.8px',
                }}
              >
                Backend engineer with a{' '}
                <span className="gradient-text">data-first mindset</span>
              </h2>
              <p style={{ fontSize: 15, marginBottom: 24, lineHeight: 1.8 }}>
                4+ years at GeekyAnts — now Senior Software Engineer II. I own features end-to-end:
                schema design, APIs, migrations, and production support.
              </p>
              <Link to="/about" className="btn btn-secondary">
                Full Profile
                <ArrowRight size={15} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  label: 'Primary Stack',
                  content: ['Node.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
                  color: 'var(--violet)',
                },
                {
                  label: 'Data & APIs',
                  content: ['GraphQL', 'REST APIs', 'TypeORM', 'Prisma', 'Redis'],
                  color: 'var(--cyan)',
                },
                {
                  label: 'Infrastructure',
                  content: ['AWS', 'Docker', 'Microservices'],
                  color: 'var(--rose)',
                },
              ].map((group) => (
                <div
                  key={group.label}
                  style={{
                    padding: '18px 20px',
                    borderRadius: 'var(--r-md)',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid var(--border-s)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 10,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: group.color,
                      marginBottom: 10,
                    }}
                  >
                    {group.label}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {group.content.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeaturedWriting />

      {/* CTA */}
      <section className="section" style={{ paddingBottom: 64 }} aria-label="Contact call to action">
        <div className="container">
          <div className="contact-cta">
            <h2 className="contact-cta__title">
              Let's build something{' '}
              <span className="gradient-text-tri">reliable</span> together.
            </h2>
            <p className="contact-cta__desc">
              Open to discussing backend architecture, interesting problems, or new opportunities.
            </p>
            <div className="contact-cta__actions">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
                <ArrowRight size={16} />
              </Link>
              <Link to="/writing" className="btn btn-secondary">
                <BookOpen size={15} />
                Read My Writing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
