import { ArrowUpRight, Compass, Handshake, ShieldCheck, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { image } from '../data/site'

const principles = [
  { icon: Target, title: 'Understand the need', text: 'We begin by listening and getting clear on the purpose, scope and site requirements.' },
  { icon: Compass, title: 'Plan with care', text: 'Thoughtful preparation helps align people, materials, access and sequence.' },
  { icon: ShieldCheck, title: 'Work responsibly', text: 'Safe work practices and quality-minded execution are part of the job, not an afterthought.' },
  { icon: Handshake, title: 'Stay connected', text: 'Open communication keeps teams aligned as work progresses and requirements evolve.' },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About / A practical engineering partner" title={<>Good work is built<br /><em>together.</em></>} copy="An industrial services team focused on thoughtful execution, reliable collaboration and work that serves its purpose." background="photo-1504307651254-35680f356dfd" />
      <section className="about-story section-pad">
        <div className="container about-story-grid">
          <Reveal className="about-story-image"><img src={image('photo-1541888946425-d81bb19240f5', 1300)} alt="Active industrial construction site" loading="lazy" /><span className="image-caption">A practical approach to every project.</span></Reveal>
          <Reveal className="about-story-copy"><span className="eyebrow">Who we are</span><h2>Built around the work<br /><em>that moves industry.</em></h2><p className="lead-copy">We support industrial construction through a connected set of capabilities — from steel fabrication and erection to sheeting, fire lines and water lines.</p><p>Our approach is straightforward: understand the requirement, plan the work carefully and carry it out with respect for people, site conditions and project goals. As the company grows, this page can be updated with verified background, leadership and operating details.</p><Link className="text-link" to="/services">Explore our capabilities <ArrowUpRight size={17} /></Link></Reveal>
        </div>
      </section>
      <section className="principles-section section-pad">
        <div className="container"><SectionHeading eyebrow="How we think" title={<>A steady approach.<br /><em>From start to finish.</em></>} copy="The way we work matters as much as the work itself." /><div className="principles-grid">{principles.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 0.06}><article className="principle-card"><Icon size={22} /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div>
      </section>
      <section className="about-note section-pad"><div className="container about-note-inner"><span className="eyebrow eyebrow-light">Our commitment</span><h2>Every detail matters.<br /><em>Every relationship, too.</em></h2><p>Company history, qualifications and performance figures should be added here only when confirmed and approved for publication.</p><Link className="button button-lime" to="/contact">Let’s talk about your project <ArrowUpRight size={17} /></Link></div></section>
    </>
  )
}
