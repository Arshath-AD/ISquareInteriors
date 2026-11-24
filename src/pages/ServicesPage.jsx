import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Home as HomeIcon, Building2, ChefHat, Sofa, KeyRound
} from 'lucide-react';

const SERVICE_ICON_MAP = { Home: HomeIcon, Building2, ChefHat, Sofa, KeyRound };
const BG_IMAGES = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&auto=format',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80&auto=format',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&auto=format',
];

export default function ServicesPage() {
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive interior design solutions for homes, offices and commercial spaces — delivered with care and expertise."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
        image="/Landscape/lans2.jpeg"
      />

      {/* Services list */}
      <section className="section-pad bg-cream">
        <div className="container-site space-y-20 md:space-y-28">
          {SERVICES.map((svc, i) => {
            const Icon = SERVICE_ICON_MAP[svc.icon] || HomeIcon;
            const isEven = i % 2 === 1;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal`}
              >
                {/* Image */}
                <div className={`relative group overflow-hidden ${isEven ? 'lg:order-2' : ''}`}>
                  <img
                    src={BG_IMAGES[i]}
                    alt={svc.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                  />
                  <div className={`absolute ${isEven ? '-bottom-4 -left-4' : '-bottom-4 -right-4'} w-20 h-20 bg-gold-400 -z-10`} />
                </div>

                {/* Content */}
                <div className={isEven ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 border border-gold-400 flex items-center justify-center">
                      <Icon size={18} className="text-gold-400" />
                    </div>
                    <span className="section-label !mb-0">{`0${i + 1}`}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-navy-700 mb-4">{svc.title}</h2>
                  <p className="text-charcoal/65 leading-relaxed mb-6">{svc.shortDesc}</p>
                  <ul className="space-y-2.5">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-charcoal/70">
                        <Check size={15} className="mt-0.5 shrink-0 text-gold-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/site-visit" className="btn-primary mt-8">
                    Book a Site Visit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-700 py-20">
        <div className="container-site text-center reveal">
          <SectionHeading label="Get Started" title="Ready to Begin?" align="center" />
          <p className="text-white/60 max-w-lg mx-auto mt-4 mb-8">
            Book a free site visit and let our team understand your space and requirements before we provide a detailed, transparent quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/site-visit" className="btn-gold">Book a Site Visit <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-outline border-white/50 text-white hover:bg-white hover:text-navy-700">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
