import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our services / Industrial capability" title={<>The right skills<br /><em>for the work ahead.</em></>} copy="Connected industrial services for steel structures, building envelopes and essential pipeline systems." />
      <section className="services-page section-pad">
        <div className="container"><SectionHeading eyebrow="Our core services" title={<>Five capabilities.<br /><em>One connected approach.</em></>} copy="Choose a service to explore the scope, applications and potential benefits." /><div className="service-grid service-grid-page">{services.map((service, index) => <Reveal key={service.slug} delay={index * 0.05}><ServiceCard service={service} /></Reveal>)}</div></div>
      </section>
      <CTASection />
    </>
  )
}
