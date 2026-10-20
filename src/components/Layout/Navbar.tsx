import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        {/* Desktop pill */}
        <div className="navbar__pill">
          <div className="navbar__links" role="list">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                role="listitem"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Divider */}
          <div className="navbar__divider" aria-hidden="true" />

          {/* Theme toggle */}
          <button
            className="navbar__theme-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        {/* Mobile pill — just hamburger + theme */}
        <div className="navbar__mobile-pill">
          <button
            className="navbar__theme-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <div className="navbar__divider" aria-hidden="true" />
          <button
            className="navbar__mobile-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobile-menu open" role="dialog" aria-label="Mobile navigation">
          {[...navLinks,
            { to: '/achievements', label: 'Achievements' },
            { to: '/writing', label: 'Writing' },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
