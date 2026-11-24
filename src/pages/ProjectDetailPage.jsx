import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../data/config';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProjectDetailPage() {
  useScrollReveal();
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-navy-700 mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn-primary">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const related = PROJECTS.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2);

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[65vh] min-h-[400px] overflow-hidden mt-16 md:mt-20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-700/40" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-400" />
        <div className="absolute bottom-10 left-0 right-0 container-site text-white">
          <span className="section-label">{project.category}</span>
          <h1 className="font-serif text-display-lg leading-tight mt-1">{project.title}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="section-pad bg-cream">
        <div className="container-site">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-navy-700 transition-colors mb-10"
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 reveal">
              <h2 className="font-serif text-2xl text-navy-700 mb-5">Project Overview</h2>
              <p className="text-charcoal/70 leading-relaxed text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium tracking-wider uppercase px-3 py-1 border border-navy-700/20 text-navy-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="reveal border-l border-gold-400 pl-8 space-y-6 h-fit">
              {[
                { label: 'Category',  value: project.category },
                { label: 'Location',  value: project.location },
                { label: 'Year',      value: project.year },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-medium tracking-widest uppercase text-gold-400 mb-1">{label}</p>
                  <p className="text-navy-700 font-medium">{value}</p>
                </div>
              ))}
              <Link to="/site-visit" className="btn-primary w-full justify-center mt-4">
                Book a Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-20 bg-cream">
          <div className="container-site">
            <h2 className="font-serif text-xl text-navy-700 mb-8 reveal">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p, i) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <Link to={`/projects/${p.id}`} className="group block overflow-hidden">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img src={p.image} alt={p.title} loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="img-overlay" />
                    </div>
                    <div className="pt-4">
                      <p className="text-xs text-gold-400 tracking-widest uppercase">{p.category}</p>
                      <h3 className="font-serif text-lg text-navy-700 mt-1 group-hover:text-gold-400 transition-colors">{p.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
