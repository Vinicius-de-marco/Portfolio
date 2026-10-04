export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <span className="pill reveal">{label}</span>
        <h2 className="section-title reveal">{title}</h2>
        {children}
      </div>
    </section>
  )
}
