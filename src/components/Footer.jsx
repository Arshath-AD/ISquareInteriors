import { Link } from 'react-router-dom';
import { Globe, Share2, Rss, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/config';

const SOCIAL_ICONS = {
  instagram: Share2,
  facebook:  Globe,
  youtube:   Rss,
  linkedin:  ExternalLink,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = Object.entries(BUSINESS.social).filter(([, url]) => url);

  return (
    <footer className="bg-navy-700 text-white/80">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" aria-label="I Square Spaces">
                <img src="/logo.png" alt="I Square Spaces logo" className="h-14 object-contain mb-5"
                  style={{ filter: 'brightness(0) invert(1)' }} />
              </Link>
              <p className="text-sm leading-relaxed text-white/60 mb-6">{BUSINESS.shortDesc}</p>
              {activeSocials.length > 0 && (
                <div className="flex gap-3">
                  {activeSocials.map(([key, url]) => {
                    const Icon = SOCIAL_ICONS[key];
                    return (
                      <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                        aria-label={key}
                        className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 transition-colors duration-300">
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-5">Navigation</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path}
                      className="text-sm text-white/60 hover:text-gold-400 transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-5">Services</h3>
              <ul className="space-y-3 text-sm text-white/60">
                {['Residential Design', 'Commercial Design', 'Modular Kitchens', 'Bedroom & Living', 'Complete Homes'].map((s) => (
                  <li key={s}>
                    <Link to="/services" className="hover:text-gold-400 transition-colors duration-200">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-5">Contact</h3>
              <ul className="space-y-4 text-sm">
                {BUSINESS.phone !== '[PLACEHOLDER — Add phone number]' && (
                  <li className="flex items-start gap-3">
                    <Phone size={15} className="mt-0.5 shrink-0 text-gold-400" />
                    <a href={`tel:${BUSINESS.phone}`} className="text-white/60 hover:text-white transition-colors">{BUSINESS.phone}</a>
                  </li>
                )}
                {BUSINESS.email !== '[PLACEHOLDER — Add email address]' && (
                  <li className="flex items-start gap-3">
                    <Mail size={15} className="mt-0.5 shrink-0 text-gold-400" />
                    <a href={`mailto:${BUSINESS.email}`} className="text-white/60 hover:text-white transition-colors">{BUSINESS.email}</a>
                  </li>
                )}
                {BUSINESS.address !== '[PLACEHOLDER — Add business address]' && (
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-gold-400" />
                    <span className="text-white/60">{BUSINESS.address}</span>
                  </li>
                )}
                {BUSINESS.phone === '[PLACEHOLDER — Add phone number]' &&
                 BUSINESS.email === '[PLACEHOLDER — Add email address]' && (
                  <li className="text-white/40 text-xs italic">Contact details to be added.</li>
                )}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-site py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {year} {BUSINESS.name}. All rights reserved.</span>
          <span>Designed with intention.</span>
        </div>
      </div>
    </footer>
  );
}
