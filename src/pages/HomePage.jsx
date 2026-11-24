import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import {
  BUSINESS, SERVICES, PROJECTS, STATS, TESTIMONIALS, PROCESS_STEPS
} from '../data/config';
import {
  Home as HomeIcon, Building2, ChefHat, Sofa, KeyRound
} from 'lucide-react';

const SERVICE_ICON_MAP = { Home: HomeIcon, Building2, ChefHat, Sofa, KeyRound };

// ── Hero slides — local images from /public/Home/slideShowHome/ ─────────────
const HERO_SLIDES = [
  {
    img: '/Home/slideShowHome/1.png',
    alt: 'I Square Spaces — interior design project',
    headline: 'Designing Spaces.\nDefining Lives.',
    sub: 'Where refined aesthetics meet purposeful function.',
  },
  {
    img: '/Home/slideShowHome/2.jpeg',
    alt: 'I Square Spaces — crafted interiors',
    headline: 'Every Detail\nIntentionally Crafted.',
    sub: 'Kitchens and living spaces designed for the way you live.',
  },
  {
    img: '/Home/slideShowHome/3.png',
    alt: 'I Square Spaces — inspiring spaces',
    headline: 'Spaces That\nInspire Excellence.',
    sub: "Commercial interiors that communicate your brand's character.",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % HERO_SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-700/60" />
        </div>
      ))}

      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-400 z-10" />

      {/* Content */}
      <div className="container-site relative z-10 pt-28 pb-24">
        <div className="max-w-2xl">
          <p className="section-label text-gold-400 mb-6">I Square Spaces</p>
          <h1
            key={current}
            className="font-serif text-display-xl text-white leading-tight mb-6 animate-fade-up whitespace-pre-line"
          >
            {slide.headline}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">{slide.sub}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-gold">
              View Our Work
              <ArrowRight size={16} />
            </Link>
            <Link to="/site-visit" className="btn-outline border-white/60 text-white hover:bg-white hover:text-navy-700">
              Book a Site Visit
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-14">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-0.5 transition-all duration-500 ${i === current ? 'w-10 bg-gold-400' : 'w-5 bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-navy-700 py-10" aria-label="Key statistics">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/15">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <p className="font-serif text-3xl md:text-4xl text-gold-400 mb-1">{value}</p>
              <p className="text-white/60 text-xs tracking-wider uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <SectionHeading
              label="Who We Are"
              title="A Design Studio Built on Craft & Intention"
              subtitle="At I Square Spaces, we believe that the spaces we inhabit shape the way we live, work and feel. Our team of passionate designers works closely with every client to create interiors that are not just beautiful — but deeply personal and enduringly functional."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">Our Story <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/Home/WhoWeAre/1.PNG"
                alt="I Square Spaces — interior design detail"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] mt-10 overflow-hidden">
              <img
                src="/Home/WhoWeAre/2.jpeg"
                alt="I Square Spaces — interior space"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-pad bg-white" aria-labelledby="services-heading">
      <div className="container-site">
        <div className="reveal">
          <SectionHeading
            label="What We Do"
            id="services-heading"
            title="Our Design Services"
            subtitle="From a single room to a complete property, we offer a comprehensive range of interior design services tailored to your needs."
            align="center"
            linkTo="/services"
            linkLabel="Explore all services"
          />
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = SERVICE_ICON_MAP[svc.icon] || HomeIcon;
            return (
              <article
                key={svc.id}
                className="reveal group p-8 border border-navy-700/10 hover:border-gold-400 transition-all duration-400 hover:shadow-md"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 flex items-center justify-center border border-navy-700/20 group-hover:bg-gold-400 group-hover:border-gold-400 transition-colors duration-300 mb-5">
                  <Icon size={20} className="text-navy-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg text-navy-700 mb-2">{svc.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{svc.shortDesc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium tracking-wider uppercase text-navy-700 hover:text-gold-400 transition-colors group/link"
                >
                  Learn more <ArrowRight size={12} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <section className="section-pad bg-cream" aria-labelledby="projects-heading">
      <div className="container-site">
        <div className="reveal">
          <SectionHeading
            label="Our Work"
            id="projects-heading"
            title="Featured Projects"
            subtitle="A selection of spaces we have designed, crafted and delivered for our clients."
            linkTo="/projects"
            linkLabel="View all projects"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-pad bg-navy-700" aria-labelledby="process-heading">
      <div className="container-site">
        <div className="reveal">
          <SectionHeading
            label="How We Work"
            id="process-heading"
            title="Our Design Process"
            subtitle="A structured, transparent journey from first conversation to final handover."
            align="center"
          />
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="reveal relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line (desktop) */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-gold-400/30 z-0" style={{ width: 'calc(100% - 2.5rem)', left: '2.5rem' }} />
              )}
              <p className="font-serif text-3xl text-gold-400/40 mb-3">{step.step}</p>
              <h3 className="font-serif text-base text-white mb-2">{step.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-white" aria-labelledby="testimonials-heading">
      <div className="container-site">
        <div className="reveal text-center max-w-xl mx-auto">
          <SectionHeading
            label="Client Words"
            id="testimonials-heading"
            title="What Our Clients Say"
            align="center"
          />
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <blockquote className="reveal text-center">
            <p className="font-serif text-xl md:text-2xl text-navy-700 leading-relaxed italic mb-8">
              "{TESTIMONIALS[active].quote}"
            </p>
            <footer>
              <p className="font-medium text-navy-700">{TESTIMONIALS[active].author}</p>
              <p className="text-xs text-charcoal/50 tracking-wider uppercase mt-1">{TESTIMONIALS[active].role}</p>
            </footer>
          </blockquote>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-gold-400' : 'w-2 h-2 bg-navy-700/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=60&auto=format"
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container-site relative z-10 text-center reveal">
        <p className="section-label">Start Your Project</p>
        <h2 className="font-serif text-display-md text-navy-700 mb-4">Ready to Transform Your Space?</h2>
        <p className="text-charcoal/60 max-w-lg mx-auto mb-8">
          Let's begin with a conversation. Book a free site visit and receive a detailed quotation within 48 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/site-visit" className="btn-primary">Book a Site Visit <ArrowRight size={16} /></Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <StatsBar />
      <IntroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
