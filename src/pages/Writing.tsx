import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Info } from 'lucide-react';
import { articles } from '../data/writing';
import { useReveal } from '../hooks/useReveal';

export default function Writing() {
  const { ref, visible } = useReveal();
  const shouldReduce = useReducedMotion();

  return (
    <main aria-label="Writing and publications">
      <div className="container" style={{ paddingTop: 60, paddingBottom: 80 }}>

        <div className="section-header">
          <div className="eyebrow">Publications</div>
          <h1 className="section-title">Technical Writing</h1>
          <p className="section-desc">
            Technical case studies and articles covering backend architecture, database engineering,
            API design, and AI-powered systems.
          </p>
        </div>


        <div className="articles-grid" ref={ref}>
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="article-card"
              initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
              aria-label={article.title}
            >
              <div className="article-top">
                <span className="article-cat">{article.category}</span>
              </div>

              <h2 className="article-title">{article.title}</h2>
              <p className="article-desc">{article.description}</p>

              <div className="article-footer">
                {article.url ? (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '8px 16px', fontSize: 13 }}
                    aria-label={`Read ${article.title}`}
                  >
                    <BookOpen size={14} />
                    Read Article
                  </a>
                ) : (
                  <p className="article-link-note">
                    🔗 Article yet to be published
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Writing philosophy */}
        <div
          style={{
            marginTop: 60,
            padding: '36px 40px',
            borderRadius: 'var(--r-xl)',
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 12 }}>Writing Focus</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14 }}>Why I Write</h3>
          <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 640 }}>
            I write about problems I've actually encountered in production — database architecture
            decisions, API performance patterns, and AI-augmented engineering workflows. The goal
            is to share practical engineering insights, not theoretical overviews.
          </p>
        </div>
      </div>
    </main>
  );
}
