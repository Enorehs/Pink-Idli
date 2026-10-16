import type { MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { motion } from 'motion/react'

export type Theme = 'light' | 'dark' | 'kawaii'

type Option = { id: Theme; label: string; icon: string }

const allOptions: Option[] = [
  { id: 'light', label: 'Light', icon: '☀' },
  { id: 'dark', label: 'Dark', icon: '☾' },
  { id: 'kawaii', label: 'Kawaii', icon: '♡' },
]

export function ThemeToggle({
  theme,
  onChange,
  options = allOptions,
  storageKey = 'theme',
}: {
  theme: Theme
  onChange: (t: Theme) => void
  options?: Option[]
  storageKey?: string
}) {
  function pick(next: Theme, e: MouseEvent<HTMLButtonElement>) {
    if (next === theme) return
    const apply = () => {
      document.documentElement.dataset.theme = next
      try { localStorage.setItem(storageKey, next) } catch {}
      flushSync(() => onChange(next))
    }
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return apply()

    // New theme grows out of the button that was clicked.
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    document.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.7,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <div className="toggle" role="group" aria-label="Color theme">
      {options.map((o) => (
        <button key={o.id} className="toggle-btn" aria-pressed={theme === o.id} onClick={(e) => pick(o.id, e)}>
          {theme === o.id && <motion.span layoutId="toggle-pill" className="pill" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
          <span aria-hidden="true">{o.icon}</span>
          <span className="toggle-label">{o.label}</span>
        </button>
      ))}
    </div>
  )
}
