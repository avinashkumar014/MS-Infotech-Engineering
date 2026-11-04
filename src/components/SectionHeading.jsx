import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, copy, link, light = false }) {
  return (
    <Reveal className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {link && (
        <a className="text-link section-heading-link" href={link.href}>
          {link.label} <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      )}
    </Reveal>
  )
}
