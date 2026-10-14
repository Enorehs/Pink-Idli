import { useEffect } from 'react'

const glyphs = ['✦', '♡', '✧', '⋆']

// Cursor trail for kawaii mode. Plain DOM nodes so React doesn't re-render on every move.
export function Sparkles() {
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let lx = 0
    let ly = 0
    const onMove = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - lx, e.clientY - ly) < 28) return
      lx = e.clientX
      ly = e.clientY
      const s = document.createElement('span')
      s.className = 'sparkle'
      s.ariaHidden = 'true'
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)]
      s.style.left = `${lx}px`
      s.style.top = `${ly}px`
      s.style.setProperty('--dx', `${(Math.random() - 0.5) * 50}px`)
      s.addEventListener('animationend', () => s.remove())
      document.body.append(s)
    }
    addEventListener('pointermove', onMove)
    return () => removeEventListener('pointermove', onMove)
  }, [])
  return null
}
