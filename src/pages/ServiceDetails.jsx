import { ArrowUpRight, Check, MoveRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  const related = services.filter((item) => item.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero eyebrow={`Services / ${service.number}`} title={<>{service.title.split(' ')[0]}<br /><em>{service.title.split(' ').slice(1).join(' ') || 'solutions'}.</em></>} copy={service.description} background={service.image.split('/').pop().split('?')[0]} />
      <section className="detail-intro section-pad">
        <div className="container detail-grid">
          <Reveal className="detail-image"><img src={service.image} alt={service.imageAlt} /><span className="detail-image-note">01 / {service.shortTitle}</span></Reveal>
          <Reveal className="detail-copy"><span className="eyebrow">A closer look</span><h2>Made to meet<br /><em>the moment.</em></h2><p className="lead-copy">{service.details}</p><p>Every project is different. Scope, materials, site conditions and applicable requirements are agreed with the client before work begins.</p><Link className="button button-dark" to="/contact">Discuss your requirements <ArrowUpRight size={17} /></Link></Reveal>
        </div>
      </section>
      <section className="applications-section section-pad"><div className="container applications-grid"><div><span className="eyebrow">Typical scope</span><h2>Where this<br /><em>work comes in.</em></h2><p>Examples below are a guide to common applications. Actual scope is defined for each project.</p></div><div className="application-list">{service.applications.map((application, index) => <Reveal key={application} delay={index * 0.06}><div className="application-row"><span>0{index + 1}</span><strong>{application}</strong><Check size={18} /></div></Reveal>)}</div></div></section>
      <section className="benefits-section section-pad"><div className="container"><SectionHeading eyebrow="What matters" title={<>Details that make<br /><em>a difference.</em></>} /><div className="benefit-grid"><Reveal><article><span>01</span><h3>Clear coordination</h3><p>Aligning work with site teams, adjacent trades and project requirements.</p></article></Reveal><Reveal delay={0.06}><article><span>02</span><h3>Careful preparation</h3><p>Planning the sequence, materials and installation requirements before mobilising.</p></article></Reveal><Reveal delay={0.12}><article><span>03</span><h3>Fit-for-purpose work</h3><p>Matching the scope to the facility, operating context and agreed specifications.</p></article></Reveal></div></div></section>
      <section className="related-section section-pad"><div className="container"><SectionHeading eyebrow="More capabilities" title={<>Related services.</>} link={{ label: 'View all services', href: '/services' }} /><div className="related-list">{related.map((item) => <Link key={item.slug} to={`/services/${item.slug}`}><span>{item.number}</span><strong>{item.title}</strong><MoveRight size={18} /></Link>)}</div></div></section>
      <CTASection />
    </>
  )
}
