import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Ruler, FileText, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { SITE_VISIT_STEPS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ICONS = [MapPin, Ruler, FileText, CheckCircle];

export default function SiteVisitPage() {
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Book a Site Visit"
        subtitle="We visit your space, understand your vision and deliver a detailed, transparent quotation — completely free of charge."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Site Visit' }]}
        image="/Landscape/lans1.png"
      />

      {/* Process */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="reveal">
            <SectionHeading
              label="The Process"
              title="Simple. Transparent. Free."
              subtitle="From your first request to receiving a detailed quotation, our site visit process is designed to be easy, informative and without obligation."
              align="center"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_VISIT_STEPS.map(({ step, title, desc }, i) => {
              const Icon = ICONS[i];
              return (
                <div key={step} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative w-16 h-16 mx-auto mb-5">
                    <div className="w-16 h-16 border-2 border-gold-400 flex items-center justify-center">
                      <Icon size={22} className="text-gold-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-navy-700 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-base text-navy-700 mb-2">{title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=900&q=80&auto=format"
                alt="Designer conducting a site visit"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="reveal">
              <SectionHeading label="Site Visit" title="What to Expect During Your Visit" />
              <div className="mt-6 space-y-5 text-charcoal/65 leading-relaxed text-sm">
                <p>Your site visit is conducted by an experienced I Square Spaces designer who will spend time understanding not just the physical dimensions of your space, but how you want to live and work in it.</p>
                <p>We will take measurements, photograph key areas, discuss material and style preferences and answer any questions you may have about our process, timeline and approach.</p>
                <p>Within 48 hours of the visit, you will receive a detailed, itemised quotation with no hidden costs — giving you a clear picture of the investment involved before any commitment is made.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application placeholder */}
      <section className="section-pad bg-navy-700">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center reveal">
            <SectionHeading label="Request a Visit" title="Book Your Free Site Visit" align="center" />
            <p className="text-white/60 mt-4 mb-8">
              Our site visit request form is coming soon. For now, please reach out to us directly and we will arrange your visit promptly.
            </p>

            {/* Placeholder form area */}
            <div className="bg-white/5 border border-white/15 p-8 text-left space-y-4">
              <p className="text-white font-serif text-lg">Request a Site Visit</p>
              <p className="text-white/50 text-sm">
                Our online booking form will be available here shortly. Contact us directly by phone or email to schedule your free site visit today.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact" className="btn-gold">
                  Contact Us Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <p className="text-white/30 text-xs mt-5 italic">
              Online booking form coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
