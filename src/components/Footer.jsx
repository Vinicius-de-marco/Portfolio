import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span className="mono">Feito com React</span>
      </div>
    </footer>
  )
}
