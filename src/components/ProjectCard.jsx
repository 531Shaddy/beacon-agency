import { ArrowUpRight } from 'lucide-react'
import ProjectVisual from './ProjectVisual'
import FadeIn from './FadeIn'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <FadeIn delay={delay} className="group card-surface overflow-hidden hover:-translate-y-1.5 hover:shadow-card-lg">
      <div className="overflow-hidden">
        {/* <ProjectVisual
          industry={project.industry}
          palette={project.palette}
          className="h-56 w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        /> */}
        {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <ProjectVisual
          industry={project.industry}
          palette={project.palette}
          className="h-56 w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">{project.industry}</span>
          <span className="font-mono text-xs text-ink-400">{project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-ink-50 px-2.5 py-1 font-mono text-[11px] text-ink-500">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
        >
          Visit project <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </FadeIn>
  )
}
