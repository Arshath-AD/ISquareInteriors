import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, className = '' }) {
  return (
    <article
      className={`group relative overflow-hidden bg-white card-lift ${className}`}
      aria-label={project.title}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
        />
        <div className="img-overlay" />
        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-navy-700 text-white text-xs font-medium tracking-wider uppercase px-3 py-1">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg text-navy-700 leading-snug mb-1">{project.title}</h3>
            <p className="text-xs text-charcoal/50 tracking-wider uppercase">{project.location} · {project.year}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-charcoal/60 leading-relaxed line-clamp-2">{project.description}</p>
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium tracking-wider uppercase text-navy-700 hover:text-gold-400 transition-colors group/link"
        >
          View Project
          <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
