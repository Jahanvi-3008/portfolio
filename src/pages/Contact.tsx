import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Copy, Check, Linkedin, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { ref, visible } = useReveal();
  const shouldReduce = useReducedMotion();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = siteConfig.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const itemAnim = (i: number) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 22 },
    animate: visible ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as const },
  });

  return (
    <main aria-label="Contact">
      <div className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>

        <div className="section-header">
          <div className="eyebrow">Get In Touch</div>
          <h1 className="section-title">Let's Connect</h1>
          <p className="section-desc">
            I'm always open to discussing backend engineering, database architecture, API design,
            or interesting technical problems. Reach out — I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid" ref={ref}>

          {/* Email card */}
          <motion.div className="contact-card" {...itemAnim(0)}>
            <div className="contact-icon-wrap" aria-hidden="true">
              <Mail size={22} />
            </div>
            <div className="contact-label">Email</div>
            <div className="contact-value">{siteConfig.email}</div>
            <p className="contact-desc">
              Best way to reach me. I typically respond within 24–48 hours. Happy to discuss
              backend architecture, potential collaborations, or just say hello.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-primary"
                style={{ fontSize: 13, padding: '9px 18px' }}
                aria-label="Send email"
              >
                <Mail size={15} />
                Send Email
              </a>
              <button
                className={`copy-btn${copied ? ' copied' : ''}`}
                onClick={copyEmail}
                aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div className="contact-card" {...itemAnim(1)}>
            <div className="contact-icon-wrap" aria-hidden="true">
              <Phone size={22} />
            </div>
            <div className="contact-label">Social & Profiles</div>
            <div style={{ marginTop: 8 }}>
              <ul className="social-list">
                <li>
                  <a
                    href={siteConfig.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                    aria-label="View LinkedIn profile"
                  >
                    <Linkedin size={18} className="social-item__icon" />
                    <div className="social-item__info">
                      <div className="social-item__name">LinkedIn</div>
                      <div className="social-item__handle">jahanvi-sardana</div>
                    </div>
                    <ArrowUpRight size={14} style={{ color: 'var(--text-3)', marginLeft: 'auto', flexShrink: 0 }} />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* What I'm open to */}
        <motion.div
          style={{
            marginTop: 40,
            padding: '36px 40px',
            borderRadius: 'var(--r-xl)',
            background: 'linear-gradient(135deg, rgba(167,139,250,0.055) 0%, rgba(113,213,232,0.04) 100%)',
            border: '1px solid rgba(167,139,250,0.14)',
            backdropFilter: 'blur(14px)',
          }}
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>What I'm Open To</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              'Backend architecture discussions',
              'Database & SQL optimization',
              'API design consulting',
              'Technical mentorship',
              'Interesting engineering challenges',
              'Select freelance projects',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 14,
                  color: 'var(--text-2)',
                  padding: '10px 14px',
                  borderRadius: 'var(--r-sm)',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid var(--border-s)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--violet)', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
