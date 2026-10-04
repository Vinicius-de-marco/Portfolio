import { certifications } from '../data.js'
import Section from './Section.jsx'

export default function Certifications() {
  return (
    <Section id="certificacoes" label="Formação" title="Certificações e cursos">
      <ol className="timeline">
        {certifications.map((cert) => (
          <li key={cert.title} className="timeline-item reveal">
            <span className="timeline-year">{cert.year}</span>
            <div>
              <h3 className="timeline-title">{cert.title}</h3>
              <p className="timeline-issuer">{cert.issuer}</p>
              <p className="timeline-desc">{cert.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
