import { Link } from 'react-router-dom';
import { ArrowRight, Check, GraduationCap, Clock, Users, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { TRAINING_HIGHLIGHTS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

const MODULES = [
  { icon: BookOpen, title: 'Design Fundamentals',    desc: 'Principles of space planning, colour theory, materials and architectural drawing.' },
  { icon: GraduationCap, title: 'Software Training', desc: 'Industry-standard tools: AutoCAD, SketchUp, 3ds Max and V-Ray rendering.' },
  { icon: Users, title: 'Live Project Exposure',     desc: 'Work on real ongoing projects under senior designer mentorship.' },
  { icon: Clock, title: 'Portfolio Development',     desc: 'Build a professional portfolio and prepare for design industry placements.' },
];

export default function TrainingPage() {
  useScrollReveal();

  return (
    <>
      <PageHero
        title="Interior Design Training"
        subtitle="Industry-ready training programmes that equip aspiring designers with the skills, software knowledge and confidence to build a creative career."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Training' }]}
        image="/Landscape/lans4.PNG"
      />

      {/* Intro */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <SectionHeading
                label="Learn With Us"
                title="Training Programmes by Practising Designers"
                subtitle="Our training is built on real-world interior design practice — not just theory. Every module is designed by working professionals to give students genuine industry exposure."
              />
              <ul className="mt-8 space-y-3">
                {TRAINING_HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-charcoal/70">
                    <Check size={15} className="mt-0.5 shrink-0 text-gold-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80&auto=format"
                alt="Students in a design training session"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="reveal">
            <SectionHeading label="Curriculum" title="What You Will Learn" align="center" />
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODULES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="reveal border border-navy-700/10 p-8 hover:border-gold-400 transition-colors duration-300"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-11 h-11 border border-gold-400 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <h3 className="font-serif text-base text-navy-700 mb-2">{title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="section-pad bg-navy-700">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center reveal">
            <SectionHeading
              label="Enrol Now"
              title="Begin Your Design Career"
              align="center"
            />
            <p className="text-white/60 mt-4 mb-8 leading-relaxed">
              Applications for the upcoming batch are now open. Click below to express your interest — a member of our team will reach out with batch dates, fees and eligibility criteria.
            </p>

            {/* Placeholder CTA — Google Forms integration coming soon */}
            <div className="bg-white/5 border border-white/15 rounded p-8 text-left">
              <p className="text-white font-medium font-serif text-lg mb-2">Apply Now</p>
              <p className="text-white/50 text-sm mb-6">
                Our online application form will be available here shortly. In the meantime, please contact us directly to register your interest.
              </p>
              <Link to="/contact" className="btn-gold">
                Contact Us to Apply <ArrowRight size={16} />
              </Link>
            </div>

            <p className="text-white/30 text-xs mt-5 italic">
              Online application form coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
