import { image } from '../data/site'

export default function PageHero({ eyebrow, title, copy, background = 'photo-1541888946425-d81bb19240f5' }) {
  return (
    <section className="page-hero" style={{ '--page-hero-image': `url("${image(background, 1800)}")` }}>
      <div className="page-hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {copy && <p>{copy}</p>}
      </div>
    </section>
  )
}
