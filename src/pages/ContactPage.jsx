import { Phone, Mail, MapPin, MessageCircle, Globe, Share2, Rss, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SOCIAL = [
  { key: 'instagram', icon: Share2,       label: 'Instagram' },
  { key: 'facebook',  icon: Globe,        label: 'Facebook' },
  { key: 'youtube',   icon: Rss,          label: 'YouTube' },
  { key: 'linkedin',  icon: ExternalLink, label: 'LinkedIn' },
];

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 border border-gold-400 flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={18} className="text-gold-400" />
      </div>
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-gold-400 mb-1">{label}</p>
        <p className="text-navy-700 font-medium leading-relaxed">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>;
  }
  return <div>{content}</div>;
}

export default function ContactPage() {
  useScrollReveal();

  const hasPhone   = BUSINESS.phone   !== '[PLACEHOLDER — Add phone number]';
  const hasEmail   = BUSINESS.email   !== '[PLACEHOLDER — Add email address]';
  const hasAddress = BUSINESS.address !== '[PLACEHOLDER — Add business address]';
  const activeSocials = SOCIAL.filter(({ key }) => BUSINESS.social[key]);

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your project. Get in touch and let's start a conversation."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
        image="/Landscape/lans2.jpeg"
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact details */}
            <div className="reveal space-y-10">
              <SectionHeading label="Get In Touch" title="Reach Out to Us" />

              <div className="space-y-7">
                {hasPhone && (
                  <ContactItem icon={Phone} label="Phone" value={BUSINESS.phone} href={`tel:${BUSINESS.phone}`} />
                )}
                {BUSINESS.whatsapp && (
                  <ContactItem
                    icon={MessageCircle}
                    label="WhatsApp"
                    value={`Chat with us on WhatsApp`}
                    href={`https://wa.me/${BUSINESS.whatsapp.replace(/\D/g, '')}`}
                  />
                )}
                {hasEmail && (
                  <ContactItem icon={Mail} label="Email" value={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />
                )}
                {hasAddress && (
                  <ContactItem icon={MapPin} label="Studio Address" value={BUSINESS.address} />
                )}
                {!hasPhone && !hasEmail && !hasAddress && (
                  <p className="text-charcoal/50 italic text-sm">
                    Contact details will be added shortly. Please check back soon.
                  </p>
                )}
              </div>

              {/* Social links */}
              {activeSocials.length > 0 && (
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gold-400 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {activeSocials.map(({ key, icon: Icon, label }) => (
                      <a
                        key={key}
                        href={BUSINESS.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 border border-navy-700/30 flex items-center justify-center hover:bg-navy-700 hover:border-navy-700 hover:text-white transition-all duration-300 text-navy-700"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Map placeholder / info panel */}
            <div className="reveal">
              <div className="bg-navy-700 p-10 h-full flex flex-col justify-center min-h-[360px]">
                <p className="section-label">Studio</p>
                <h3 className="font-serif text-2xl text-white mb-4">Visit Our Studio</h3>
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  {hasAddress
                    ? BUSINESS.address
                    : 'Our studio address will be listed here. Please contact us to arrange an in-studio consultation.'
                  }
                </p>
                <div className="mt-auto border-t border-white/10 pt-6">
                  <p className="text-xs text-white/40 tracking-wide">
                    Monday – Saturday &nbsp;·&nbsp; By appointment
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
