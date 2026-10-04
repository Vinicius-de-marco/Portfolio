import { profile } from '../data.js'
import { ArrowUpRight, DownloadIcon, GithubIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact-inner">
        <span className="pill reveal">Contato</span>
        <h2 className="section-title reveal">Vamos conversar?</h2>
        <p className="contact-body reveal">
          Estou disponível para oportunidades de emprego, freelas e colaborações.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary reveal">
          {profile.email}
        </a>
        <div className="contact-links reveal">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link">
            <GithubIcon /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
            <ArrowUpRight /> LinkedIn
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="link">
            <DownloadIcon /> Currículo
          </a>
        </div>
      </div>
    </section>
  )
}
