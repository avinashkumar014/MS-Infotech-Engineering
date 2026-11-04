import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

export default function ServiceCard({ service }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="service-card"
      whileHover={reduceMotion ? undefined : { y: -7 }}
      transition={{ duration: 0.25 }}
    >
      <Link to={`/services/${service.slug}`} className="service-card-link">
        <div className="service-card-image">
          <img src={service.image} alt={service.imageAlt} loading="lazy" />
          <span className="service-number">{service.number}</span>
          <span className="service-card-arrow"><ArrowUpRight size={19} /></span>
        </div>
        <div className="service-card-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className="text-link">Explore service <ArrowUpRight size={16} /></span>
        </div>
      </Link>
    </motion.article>
  )
}
