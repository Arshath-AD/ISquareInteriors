import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable section heading with optional label, divider & CTA link.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',   // 'left' | 'center'
  linkTo,
  linkLabel = 'View all',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="font-serif text-display-md text-navy-700 leading-tight">{title}</h2>
      <div className={`divider-gold ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-5 text-charcoal/60 text-base leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      {linkTo && (
        <Link
          to={linkTo}
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-navy-700 hover:text-gold-400 transition-colors group"
        >
          {linkLabel}
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
