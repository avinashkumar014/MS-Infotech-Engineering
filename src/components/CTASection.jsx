import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-pattern" aria-hidden="true" />
      <div className="cta-copy">
        <span className="eyebrow">Have a project in mind?</span>
        <h2>Let’s build something<br /><em>strong together.</em></h2>
      </div>
      <Link className="button button-lime" to="/contact">Talk to our team <ArrowUpRight size={17} /></Link>
    </section>
  )
}
