import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-elegant
        ${transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-navy-700/8'
        }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" aria-label="I Square Spaces — Home">
            <img
              src="/logo.png"
              alt="I Square Spaces logo"
              className={`transition-all duration-500 object-contain
                ${transparent ? 'h-12 md:h-16' : 'h-10 md:h-12'}`}
              style={{ maxWidth: '140px' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200
                  ${transparent ? 'text-white/90 hover:text-gold-400' : 'text-navy-700 hover:text-gold-400'}
                  ${isActive ? (transparent ? '!text-gold-400' : '!text-gold-400') : ''}`
                }
              >
                {label}
              </NavLink>
            ))}

          </nav>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded transition-colors ${transparent ? 'text-white' : 'text-navy-700'}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 md:top-20 bg-white z-40 transition-all duration-400 ease-elegant
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `py-4 text-lg font-medium border-b border-navy-700/10 text-navy-700 transition-colors hover:text-gold-400
                ${isActive ? '!text-gold-400' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
