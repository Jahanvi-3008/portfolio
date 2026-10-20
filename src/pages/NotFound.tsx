import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found" aria-label="404 page not found">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ maxWidth: 480 }}
      >
        <div className="not-found__code" aria-hidden="true">
          404
        </div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__desc">
          Looks like this route doesn't exist. The page may have been moved, deleted,
          or you may have followed an outdated link.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" aria-label="Return to homepage">
            <Home size={15} />
            Back to Home
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => history.back()}
            aria-label="Go back to previous page"
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
        </div>

        <div
          style={{
            marginTop: 48,
            padding: '18px 24px',
            borderRadius: 'var(--r-md)',
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <p style={{ fontFamily: 'var(--f-mono)', fontSize: 12.5, color: 'var(--text-3)', margin: 0 }}>
            <span style={{ color: 'var(--tk-kw, #C084FC)' }}>{'> '}</span>
            route not found:{' '}
            <span style={{ color: 'var(--violet)' }}>{window.location.pathname}</span>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
