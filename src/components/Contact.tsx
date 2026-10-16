import type { PointerEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { contact } from '../data'

const marketingLinks = [
  { label: contact.phone, href: `tel:${contact.phoneHref}` },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'Beacons', href: contact.beacons },
]

export function Contact({
  heading = 'Got a launch, a campaign or a stage that needs a host?',
  links = marketingLinks,
}: {
  heading?: string
  links?: { label: string; href: string }[]
}) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 14 })
  const sy = useSpring(y, { stiffness: 200, damping: 14 })

  // The email leans toward the cursor.
  function pull(e: PointerEvent<HTMLAnchorElement>) {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.12)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }

  return (
    <footer className="contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h">{heading}</h2>
        <motion.a
          href={`mailto:${contact.email}`}
          className="email"
          style={{ x: sx, y: sy }}
          onPointerMove={pull}
          onPointerLeave={() => { x.set(0); y.set(0) }}
        >
          {contact.email}
        </motion.a>
        <ul className="contact-links">
          {links.map((l) => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <p className="fine">Sherone D’Souza, {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
