import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, onSelect }) {
  return (
    <button className="project-card" type="button" onClick={() => onSelect(project)}>
      <div className="project-image">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project-open"><ArrowUpRight size={19} /></span>
      </div>
      <div className="project-card-meta">
        <span>{project.category}</span>
        <span>{project.location}</span>
      </div>
      <h3>{project.title}</h3>
    </button>
  )
}
