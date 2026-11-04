import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, HardHat, ShieldCheck, Timer, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import CTASection from '../components/CTASection'
import ProjectCard from '../components/ProjectCard'
import ProjectDialog from '../components/ProjectDialog'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { image, site } from '../data/site'

const reasons = [
  { icon: ShieldCheck, title: 'Quality workmanship', text: 'Careful attention to materials, fit and finish at every stage of the work.' },
  { icon: HardHat, title: 'Safety-minded teams', text: 'A practical, safety-first approach to planning and working on site.' },
  { icon: Timer, title: 'Thoughtful execution', text: 'Clear coordination and considered sequencing help keep work moving.' },
  { icon: Wrench, title: 'Solutions that fit', text: 'Services shaped around your facility, scope and project requirements.' },
  { icon: Check, title: 'Reliable collaboration', text: 'Responsive communication and a professional approach from start to finish.' },
  { icon: ArrowRight, title: 'One capable partner', text: 'Steel, building envelope and industrial pipeline capabilities in one place.' },
]

const process = [
  ['01', 'Understand', 'We learn about your scope, site and project requirements.'],
  ['02', 'Plan', 'We align the work, resources and schedule before execution.'],
  ['03', 'Prepare', 'Materials and teams are prepared to suit the agreed scope.'],
  ['04', 'Execute', 'Installation and fabrication are coordinated with care.'],
  ['05', 'Inspect', 'The completed work is reviewed against project requirements.'],
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [videoFailed, setVideoFailed] = useState(false)
  const reduceMotion = useReducedMotion()
  const heroPoster = image('photo-1541888946425-d81bb19240f5', 2200)

  return (
    <>
      <section className="hero-section" id="top">
        {!reduceMotion && !videoFailed && (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPoster}
            aria-hidden="true"
            tabIndex="-1"
            onError={() => setVideoFailed(true)}
          >
            <source
              src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="eyebrow eyebrow-light"><i /> Industrial engineering & construction</span>
            <h1 aria-label="Building the future with strength and precision">
              <motion.span
                className="hero-heading-line"
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                Building the future
              </motion.span>
              <motion.span
                className="hero-heading-line"
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <em>with strength &amp; precision.</em>
              </motion.span>
            </h1>
            <p>Delivering excellence in industrial construction, steel fabrication, structural erection, and engineering solutions.</p>
            <div className="hero-actions">
              <Link className="button hero-primary" to="/services">Explore Our Services <ArrowUpRight size={17} /></Link>
              <Link className="button button-outline-light" to="/contact">Discuss Your Project <ArrowUpRight size={17} /></Link>
            </div>
          </motion.div>
          <div className="hero-side-note">
            <span className="hero-side-line" />
            <span>Engineering<br />that works hard.</span>
          </div>
          <a className="scroll-cue" href="#intro"><span>Scroll to explore</span><ArrowDown size={16} /></a>
          <div className="hero-coordinates">INDUSTRIAL / STEEL / INFRASTRUCTURE</div>
        </div>
        <div className="hero-index"><span>01</span><span className="hero-index-line" /><span>05</span></div>
      </section>

      <section className="intro-section" id="intro">
        <div className="intro-kicker"><span className="eyebrow">01 / Built on capability</span></div>
        <Reveal className="intro-main">
          <h2>Strong structures.<br /><em>Stronger partnerships.</em></h2>
          <div className="intro-copy">
            <p>We bring essential industrial work together — steel erection, fabrication, building envelopes and utility pipework — with a focus on doing each job thoughtfully and well.</p>
            <Link className="text-link" to="/about">Get to know us <ArrowUpRight size={17} /></Link>
          </div>
        </Reveal>
        <div className="intro-foot">
          <span>STEEL & STRUCTURES</span><span>PEB SOLUTIONS</span><span>INDUSTRIAL SERVICES</span><span>MADE TO LAST</span>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="02 / What we do"
            title={<>Complete capability.<br /><em>One dependable team.</em></>}
            copy="From structural steel to essential utility lines, explore the services that keep industrial projects moving."
            link={{ label: 'View all services', href: '/services' }}
          />
          <div className="service-grid home-service-grid">
            {services.map((service, index) => <Reveal key={service.slug} delay={index * 0.1}><ServiceCard service={service} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="about-feature section-pad" id="about">
        <div className="container about-grid">
          <Reveal className="about-visual">
            <div className="about-image-main"><img src={image('photo-1504307651254-35680f356dfd', 1200)} alt="Construction professional working at an industrial site" loading="lazy" /></div>
            <div className="about-image-cut"><img src={image('photo-1504917595217-d4dc5ebe6122', 650)} alt="Metal fabrication and welding" loading="lazy" /></div>
            <div className="about-stamp"><span>STEEL</span><span>BUILT WITH INTENT</span><span>WORK / WELL</span></div>
            <span className="visual-caption">Built around the work that matters.</span>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">03 / A practical approach</span>
            <h2>Engineering excellence.<br /><em>Built on trust.</em></h2>
            <p className="lead-copy">Good work starts with listening. We take the time to understand your requirements, plan the details and bring the right people and capabilities to the job.</p>
            <p>From site installation to custom fabrication, our focus is on clear communication, safe working practices and solutions that serve the way your facility operates.</p>
            <div className="about-values">
              <div><span>01</span><strong>Our vision</strong><p>To contribute to stronger industry through practical, dependable engineering.</p></div>
              <div><span>02</span><strong>Our mission</strong><p>To deliver each project with care, integrity and attention to the details.</p></div>
            </div>
            <Link className="text-link" to="/about">More about our approach <ArrowUpRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="peb-section section-pad" id="peb">
        <div className="container peb-grid">
          <Reveal className="peb-copy">
            <span className="eyebrow eyebrow-light">04 / PEB structures</span>
            <h2>Space to do<br /><em>more with.</em></h2>
            <p>Pre-engineered buildings bring key structural and enclosure components together as a coordinated system. They can support a range of industrial uses, from production and storage to logistics and workshops.</p>
            <div className="peb-includes">
              {['Primary frames', 'Purlins & girts', 'Roof & wall panels', 'Bracing systems', 'Gutters & ventilators', 'Mezzanine floors'].map((item) => <span key={item}><Check size={14} />{item}</span>)}
            </div>
            <Link className="button button-lime" to="/peb-structures">Explore PEB solutions <ArrowUpRight size={17} /></Link>
          </Reveal>
          <Reveal className="peb-visual">
            <img src={image('photo-1541888946425-d81bb19240f5', 1500)} alt="Large construction site with workers preparing a building structure" loading="lazy" />
            <div className="peb-visual-label"><span>01—09</span><span>BUILDING COMPONENTS</span><ArrowUpRight size={16} /></div>
          </Reveal>
        </div>
      </section>

      <section className="projects-section section-pad" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow="05 / Project capabilities"
            title={<>Work that takes<br /><em>shape on site.</em></>}
            copy="A look at the types of work we can support. Replace these illustrative categories with approved project photography and details."
            link={{ label: 'Explore project gallery', href: '/projects' }}
          />
          <div className="project-grid project-grid-home">
            {projects.slice(0, 3).map((project) => <Reveal key={project.title}><ProjectCard project={project} onSelect={setSelectedProject} /></Reveal>)}
          </div>
          <p className="project-disclaimer">Illustrative service categories only — not a record of completed projects.</p>
        </div>
      </section>

      <section className="reasons-section section-pad" id="why-us">
        <div className="container">
          <SectionHeading eyebrow="06 / Why work with us" title={<>The right work.<br /><em>Done the right way.</em></>} copy="A straightforward, collaborative approach to industrial construction and engineering." />
          <div className="reasons-grid">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="reason-card"><span className="reason-icon"><Icon size={20} strokeWidth={1.7} /></span><span className="reason-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="07 / How we work" title={<>A clear path from<br /><em>plan to handover.</em></>} copy="A considered process helps every project move forward with clarity." />
          <div className="process-track">
            {process.map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 0.08}>
                <article className="process-step"><span className="process-index">{number}</span><span className="process-dot" /><h3>{title}</h3><p>{copy}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-inner">
          <div className="stats-intro"><span className="eyebrow eyebrow-light">A foundation for what’s next</span><h2>Built on real<br /><em>commitment.</em></h2><p>We believe the strongest measure is the care put into every project.</p></div>
          <div className="stats-grid">
            {site.stats.map((stat) => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>Update with verified company data</small></div>)}
          </div>
        </div>
      </section>

      <section className="home-contact section-pad">
        <div className="container home-contact-inner">
          <Reveal>
            <span className="eyebrow">Have a scope to discuss?</span>
            <h2>Let’s find the<br /><em>right way forward.</em></h2>
          </Reveal>
          <Reveal className="home-contact-action">
            <p>Tell us what you’re planning. We’ll connect with you to understand the requirements and next steps.</p>
            <Link className="button button-dark" to="/contact">Start an enquiry <ArrowUpRight size={17} /></Link>
            <Link className="text-link" to="/services">Explore all capabilities <ChevronRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
