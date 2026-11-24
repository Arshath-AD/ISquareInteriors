import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function PageHero({
  title,
  subtitle,
  breadcrumb,   // e.g. [{ label: 'Home', path: '/' }, { label: 'About' }]
  image,
  compact = false,
}) {
  return (
    <section
      className={`relative flex items-end bg-navy-700 overflow-hidden ${compact ? 'min-h-[42vh]' : 'min-h-[55vh]'}`}
      role="banner"
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" aria-hidden className="w-full h-full object-cover opacity-20" />
        </div>
      )}

      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400" />

      <div className="container-site relative z-10 pb-14 pt-32 md:pt-36">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs text-white/50 tracking-wider uppercase">
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <ArrowUpRight size={11} className="-rotate-45" />}
                  {crumb.path
                    ? <Link to={crumb.path} className="hover:text-gold-400 transition-colors">{crumb.label}</Link>
                    : <span className="text-white/80">{crumb.label}</span>
                  }
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="font-serif text-display-lg text-white leading-tight max-w-2xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-white/60 text-base leading-relaxed max-w-xl">{subtitle}</p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
