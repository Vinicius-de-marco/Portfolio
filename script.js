 // ── CURSOR ──
  const cursor = document.getElementById('cursor')
  const ring = document.getElementById('cursorRing')
  let mx = 0, my = 0, rx = 0, ry = 0

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY })

  function animCursor() {
    cursor.style.left = mx + 'px'
    cursor.style.top = my + 'px'
    rx += (mx - rx) * .12
    ry += (my - ry) * .12
    ring.style.left = rx + 'px'
    ring.style.top = ry + 'px'
    requestAnimationFrame(animCursor)
  }
  animCursor()

  // ── TYPED TEXT ──
  const phrases = [
    'npm run dev',
    'git commit -m "feat: new feature"',
    'SELECT * FROM projetos;',
    'console.log("Hello, World!")',
    'docker-compose up',
    'const futuro = await carreira()',
  ]
  let pi = 0, ci = 0, deleting = false
  const el = document.getElementById('typed-text')

  function type() {
    const phrase = phrases[pi]
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci)
      if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return }
    } else {
      el.textContent = phrase.slice(0, --ci)
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
    }
    setTimeout(type, deleting ? 40 : 80)
  }
  setTimeout(type, 800)

  // ── SCROLL REVEAL ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } })
  }, { threshold: .1 })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))