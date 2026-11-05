import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const components = ['Primary frames', 'Secondary members', 'Purlins and girts', 'Roof panels', 'Wall cladding', 'Bracing systems', 'Ridge ventilators', 'Gutters and downpipes', 'Mezzanine floors']

const gallery = [
  {
    src: '/images/peb-building-layout.jpg',
    alt: 'PEB building layout showing roof, wall, frame and ventilation components',
    title: 'PEB building layout',
    type: 'diagram',
  },
  {
    src: '/images/peb-components-diagram.jpg',
    alt: 'Diagram labeling structural and envelope components of a pre-engineered building',
    title: 'Building components',
    type: 'diagram',
  },
  {
    src: '/images/peb-steel-frame-installation.webp',
    alt: 'Steel portal frames being assembled at a construction site',
    title: 'Steel frame assembly',
    type: 'photo',
  },
  {
    src: '/images/peb-warehouse-frame.webp',
    alt: 'Large steel warehouse frame under construction',
    title: 'Warehouse frame',
    type: 'photo',
  },
  {
    src: '/images/peb-multilevel-steel-frame.webp',
    alt: 'Multi-level steel building frame during construction',
    title: 'Multi-level steel frame',
    type: 'photo',
  },
  {
    src: '/images/peb-steel-floor-framing.webp',
    alt: 'Steel floor framing and columns in a multi-level structure',
    title: 'Floor framing',
    type: 'photo',
  },
]

export default function PEBStructures() {
  return (
    <>
      <PageHero eyebrow="PEB structures / Integrated building systems" title={<>A stronger frame<br /><em>for what’s next.</em></>} copy="Pre-engineered building components and installation capabilities for industrial, warehousing and commercial applications." background="photo-1541888946425-d81bb19240f5" />
      <section className="peb-intro section-pad"><div className="container peb-intro-grid"><Reveal><span className="eyebrow">Understanding PEB</span><h2>Designed as a system.<br /><em>Built for a purpose.</em></h2></Reveal><Reveal><p className="lead-copy">A pre-engineered building combines structural members, secondary framing and building envelope components as a coordinated solution.</p><p>PEB systems can be configured for a range of uses. The right building depends on its clear span, loading, site, operational needs and applicable design requirements.</p></Reveal></div></section>
      <section className="peb-gallery-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="PEB design and delivery" title={<>From building concept<br /><em>to steel frame.</em></>} copy="Explore PEB building layouts, structural components and steel frames in progress." />
          <div className="peb-gallery-grid">
            {gallery.map((item, index) => (
              <Reveal key={item.src} delay={(index % 3) * 0.06}>
                <figure className={`peb-gallery-card peb-gallery-card--${item.type}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="peb-components-section section-pad"><div className="container peb-components-grid"><Reveal className="peb-components-copy"><span className="eyebrow eyebrow-light">The building blocks</span><h2>Considered down<br /><em>to each component.</em></h2><p>Key elements of a PEB system work together to form the building structure and enclosure. Final component selection follows the project design and specifications.</p><Link className="button button-lime" to="/contact">Discuss a PEB project <ArrowUpRight size={17} /></Link></Reveal><div className="component-list">{components.map((component, index) => <Reveal key={component} delay={index * 0.025}><div><span>0{index + 1}</span><strong>{component}</strong><Check size={16} /></div></Reveal>)}</div></div></section>
      <CTASection />
    </>
  )
}
