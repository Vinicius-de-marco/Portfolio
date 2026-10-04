import { about } from '../data.js'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="sobre" label="Sobre" title="Quem está por trás do código">
      <div className="about">
        <div className="about-text">
          {about.paragraphs.map((p) => (
            <p key={p} className="reveal">{p}</p>
          ))}
        </div>
        <dl className="facts reveal">
          {about.facts.map((fact) => (
            <div key={fact.label} className="fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
