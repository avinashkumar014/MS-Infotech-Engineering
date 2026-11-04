import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { image } from '../data/site'

const components = ['Primary frames', 'Secondary members', 'Purlins and girts', 'Roof panels', 'Wall cladding', 'Bracing systems', 'Ridge ventilators', 'Gutters and downpipes', 'Mezzanine floors']

export default function PEBStructures() {
  return (
    <>
      <PageHero eyebrow="PEB structures / Integrated building systems" title={<>A stronger frame<br /><em>for what’s next.</em></>} copy="Pre-engineered building components and installation capabilities for industrial, warehousing and commercial applications." background="photo-1541888946425-d81bb19240f5" />
      <section className="peb-intro section-pad"><div className="container peb-intro-grid"><Reveal><span className="eyebrow">Understanding PEB</span><h2>Designed as a system.<br /><em>Built for a purpose.</em></h2></Reveal><Reveal><p className="lead-copy">A pre-engineered building combines structural members, secondary framing and building envelope components as a coordinated solution.</p><p>PEB systems can be configured for a range of uses. The right building depends on its clear span, loading, site, operational needs and applicable design requirements.</p></Reveal></div></section>
      <section className="peb-applications section-pad"><div className="container"><SectionHeading eyebrow="Built for many uses" title={<>Space that works<br /><em>for your operation.</em></>} /><div className="peb-app-grid">{[['Industrial sheds', 'photo-1541888946425-d81bb19240f5'], ['Warehouse buildings', 'photo-1504307651254-35680f356dfd'], ['Production spaces', 'photo-1516937941344-00b4e0337589']].map(([title, photo], index) => <Reveal key={title} delay={index * 0.06}><article className="peb-app-card"><img src={image(photo, 1000)} alt={`${title} steel building`} loading="lazy" /><div><span>0{index + 1}</span><h3>{title}</h3></div></article></Reveal>)}</div></div></section>
      <section className="peb-components-section section-pad"><div className="container peb-components-grid"><Reveal className="peb-components-copy"><span className="eyebrow eyebrow-light">The building blocks</span><h2>Considered down<br /><em>to each component.</em></h2><p>Key elements of a PEB system work together to form the building structure and enclosure. Final component selection follows the project design and specifications.</p><Link className="button button-lime" to="/contact">Discuss a PEB project <ArrowUpRight size={17} /></Link></Reveal><div className="component-list">{components.map((component, index) => <Reveal key={component} delay={index * 0.025}><div><span>0{index + 1}</span><strong>{component}</strong><Check size={16} /></div></Reveal>)}</div></div></section>
      <section className="peb-image-section"><img src={image('photo-1541888946425-d81bb19240f5', 2000)} alt="Industrial construction site and structure preparation" loading="lazy" /><span>STRUCTURE / ENCLOSURE / INSTALLATION</span></section>
      <CTASection />
    </>
  )
}
