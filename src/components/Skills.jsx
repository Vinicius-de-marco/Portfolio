import { skills } from '../data.js'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="stack" label="Stack" title="Tecnologias que uso">
      <div className="grid">
        {skills.map((skill) => (
          <div key={skill.title} className="card reveal">
            <h3 className="card-title">{skill.title}</h3>
            <p className="card-desc">{skill.description}</p>
            <ul className="tags">
              {skill.tags.map((tag) => (
                <li key={tag} className="tag">{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
