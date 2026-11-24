import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Lightbulb, Heart, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS, STATS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const VALUES = [
  { icon: Eye,       title: 'Attention to Detail',  desc: 'We obsess over every detail — from the finish of a surface to the rhythm of a room — because excellence lives in the specifics.' },
  { icon: Lightbulb, title: 'Thoughtful Creativity', desc: 'Creativity guided by purpose. We design spaces that work beautifully in real life, not just in photographs.' },
  { icon: Heart,     title: 'Client Partnership',   desc: 'We listen deeply, collaborate openly and treat every brief as a privilege, not a transaction.' },
  { icon: Award,     title: 'Craft & Quality',      desc: 'We hold the work to an uncompromising standard — selecting materials, suppliers and craftspeople with care.' },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      <PageHero
        title="About I Square Spaces"
        subtitle="A design studio driven by craft, curiosity and a belief that great interiors change how people live."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About' }]}
        image="/Landscape/lans1.png"
      />

      {/* Intro */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <SectionHeading
                label="Our Story"
                title="Spaces That Feel Like You"
              />
              <div className="mt-6 space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  I Square Spaces was founded on a simple but powerful conviction: that every person deserves a space that reflects their identity, supports their daily life and brings them genuine joy.
                </p>
                <p>
                  What started as a passion project has grown into a full-service design studio working across residential homes, commercial offices and retail environments — always with the same commitment to design integrity and client satisfaction.
                </p>
                <p>
                  We bring together architecture, interior design and project management under one roof, ensuring that the vision we develop together is the vision that is delivered.
                </p>
              </div>
              <Link to="/contact" className="btn-primary mt-8">
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="reveal">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&auto=format"
                  alt="A beautifully designed living room by I Square Spaces"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                {/* Gold accent block */}
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gold-400 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-700 py-14">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/15">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center px-4 reveal">
                <p className="font-serif text-4xl text-gold-400 mb-1">{value}</p>
                <p className="text-white/60 text-xs tracking-wider uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="reveal border-l-2 border-gold-400 pl-8 py-2">
              <h2 className="font-serif text-2xl text-navy-700 mb-3">Our Mission</h2>
              <p className="text-charcoal/65 leading-relaxed">
                To create interior spaces of lasting quality and beauty — spaces that enhance the lives of the people who inhabit them and reflect the unique character of each client.
              </p>
            </div>
            <div className="reveal border-l-2 border-gold-400 pl-8 py-2" style={{ transitionDelay: '120ms' }}>
              <h2 className="font-serif text-2xl text-navy-700 mb-3">Our Vision</h2>
              <p className="text-charcoal/65 leading-relaxed">
                To be recognised as the design partner of choice for discerning clients who value craftsmanship, creativity and a genuine commitment to their satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="reveal">
            <SectionHeading label="Our Values" title="What We Stand For" align="center" />
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 mx-auto border border-gold-400 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-serif text-lg text-navy-700 mb-3">{title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="section-pad bg-navy-700">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center reveal">
            <SectionHeading label="Design Philosophy" title="How We Approach Design" align="center" />
            <div className="mt-8 space-y-4 text-white/60 leading-relaxed text-sm">
              <p>We begin every project by listening — not just to what you want your space to look like, but how you want it to feel, how you want to live in it and what it means to you.</p>
              <p>From that foundation, we build a design concept that is rooted in your life, not in trends. We select materials, proportions and palettes that will age gracefully and never feel outdated.</p>
              <p>Throughout execution, we maintain rigorous standards — managing every contractor, supplier and craftsperson to ensure the final space matches the vision we developed together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-cream">
        <div className="container-site text-center reveal">
          <p className="section-label">Start Here</p>
          <h2 className="font-serif text-display-md text-navy-700 mb-4">Begin Your Design Journey</h2>
          <p className="text-charcoal/60 max-w-lg mx-auto mb-8">
            Every great interior begins with a conversation. We'd love to hear about your space.
          </p>
          <Link to="/contact" className="btn-primary">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
