import { projects } from '../data.js'
import Section from './Section.jsx'
import { ArrowUpRight, GithubIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <Section id="projetos" label="Projetos" title="Trabalhos selecionados">
      <div className="project-list">
        {projects.map((project, i) => (
          <article key={project.title} className="project reveal">
            <span className="project-num">{String(i + 1).padStart(2, '0')}</span>

            <div className="project-main">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="tags">
                {project.stack.map((tech) => (
                  <li key={tech} className="tag">{tech}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="link">
                  <GithubIcon /> Código
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="link">
                  <ArrowUpRight /> Ver site
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
