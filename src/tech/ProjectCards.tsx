import { motion, useReducedMotion } from 'motion/react'
import { projects } from './data'

export function ProjectCards() {
  const reduce = useReducedMotion()

  return (
    <section className="section" id="projects" aria-labelledby="projects-h">
      <div className="wrap">
        <h2 id="projects-h">Things I’ve built</h2>
        <p className="muted">Instruments, engines, platforms and one compiler.</p>
        <ol className="projects">
          {projects.map((p, i) => (
            <motion.li
              key={p.name}
              className="project"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <span className="project-idx">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-tag">{p.tagline}</p>
              <p className="project-blurb">{p.blurb}</p>
              {p.href && (
                <a className="project-link" href={p.href} target="_blank" rel="noreferrer">
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              )}
              <ul className="chips">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
