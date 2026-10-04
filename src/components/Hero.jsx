import { profile } from '../data.js'
import useRotatingText from '../hooks/useRotatingText.js'
import { DownloadIcon } from './Icons.jsx'

export default function Hero() {
  const word = useRotatingText(profile.rotating)

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <span className="status">
          <span className="status-dot" />
          Disponível para oportunidades
        </span>

        <h1 className="hero-title">
          {profile.name}
          <span className="hero-sub">
            Eu desenvolvo <span className="accent">{word}</span>
            <span className="cursor" aria-hidden="true" />
          </span>
        </h1>

        <p className="hero-body">{profile.intro}</p>

        <div className="hero-cta">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
            <DownloadIcon /> Currículo
          </a>
        </div>
      </div>
    </section>
  )
}
