import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { experience } from '../data'

type Job = { role: string; company: string; points: string[] }

export function Experience({
  jobs = experience,
  intro = 'Nine roles across SEO, brand, events, sales and content. Most recent first.',
}: {
  jobs?: Job[]
  intro?: string
}) {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="wrap exp">
        <div className="exp-side">
          <h2 id="work-h">Where I’ve worked</h2>
          <p className="muted">{intro}</p>
        </div>
        <ol className="exp-list">
          {jobs.map((job, i) => {
            const isOpen = open === i
            return (
              <li key={job.company} className={isOpen ? 'job is-open' : 'job'}>
                <button className="job-head" aria-expanded={isOpen} aria-controls={`job-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="job-role">{job.role}</span>
                  <span className="job-co">{job.company}</span>
                  <motion.span className="job-icon" animate={{ rotate: isOpen ? 45 : 0 }} aria-hidden="true">
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`job-${i}`}
                      className="job-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <ul>
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
