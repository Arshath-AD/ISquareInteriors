import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectsPage() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="A portfolio of spaces designed, crafted and delivered — each one a reflection of a unique client brief."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Projects' }]}
        image="/Landscape/lans3.jpeg"
      />

      <section className="section-pad bg-cream">
        <div className="container-site">
          {/* Filter bar */}
          <div className="reveal flex flex-wrap gap-2 mb-12">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-300
                  ${activeCategory === cat
                    ? 'bg-navy-700 text-white'
                    : 'border border-navy-700/30 text-navy-700 hover:border-navy-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-charcoal/50 py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container-site text-center reveal">
          <SectionHeading label="Your Project" title="Let Us Design Your Space" align="center" />
          <p className="text-charcoal/60 max-w-md mx-auto mt-4 mb-8">
            Every project in our portfolio started with a conversation. Yours can too.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
