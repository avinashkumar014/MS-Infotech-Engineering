import { useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

export default function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
        <img src={project.image} alt={project.imageAlt} />
        <div className="project-dialog-copy">
          <span className="eyebrow">{project.category} <span className="eyebrow-separator">/</span> {project.location}</span>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
          <p className="placeholder-note">Project details and imagery are placeholders. Replace them with approved, verified project material before publishing.</p>
          <a className="text-link" href="/contact">Discuss a similar project <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </div>
  )
}
