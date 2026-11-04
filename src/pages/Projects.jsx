import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectDialog from '../components/ProjectDialog'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import CTASection from '../components/CTASection'

const categories = ['All work', ...new Set(projects.map((project) => project.category))]

export default function Projects() {
  const [filter, setFilter] = useState('All work')
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = useMemo(() => filter === 'All work' ? projects : projects.filter((project) => project.category === filter), [filter])

  return (
    <>
      <PageHero eyebrow="Projects / Examples of our capabilities" title={<>Good work takes<br /><em>many forms.</em></>} copy="Explore illustrative examples of the work we support across structures, fabrication, sheeting and industrial pipelines." background="photo-1541888946425-d81bb19240f5" />
      <section className="projects-page section-pad"><div className="container">
        <div className="projects-page-intro"><div><span className="eyebrow">Project gallery</span><h2>Capabilities in<br /><em>focus.</em></h2></div><p>Project names, locations and images below are illustrative placeholders, not claims about completed work. Replace with approved material before publishing.</p></div>
        <div className="project-filters" role="group" aria-label="Filter projects">
          {categories.map((category) => <button key={category} className={filter === category ? 'filter-active' : ''} type="button" onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        <div className="project-grid project-grid-page">{visibleProjects.map((project, index) => <Reveal key={project.title} delay={(index % 3) * 0.05}><ProjectCard project={project} onSelect={setSelectedProject} /></Reveal>)}</div>
      </div></section>
      <CTASection />
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
