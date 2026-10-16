import { useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { contact, education, experience, profile, skills } from './data'
import { ThemeToggle, type Theme } from '../components/ThemeToggle'
import { Badge } from '../components/Badge'
import { Experience } from '../components/Experience'
import { StickerSheet } from '../components/StickerSheet'
import { Contact } from '../components/Contact'
import { ProjectCards } from './ProjectCards'

const nameLines = ['Sherone', 'D’Souza']
const themes: { id: Theme; label: string; icon: string }[] = [
  { id: 'light', label: 'Light', icon: '☀' },
  { id: 'dark', label: 'Dark', icon: '☾' },
]
const links = [
  { label: contact.phone, href: `tel:${contact.phoneHref}` },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'GitHub', href: contact.github },
].filter((l) => l.href !== '#')

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme as Theme)
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <header className="top">
        <div className="wrap top-inner">
          <a href="#top" className="mono" aria-label="Back to top">S.D</a>
          <ThemeToggle theme={theme} onChange={setTheme} options={themes} storageKey="tech-theme" />
        </div>
      </header>

      <main id="top">
        <section className="wrap hero" aria-label="Intro">
          <div className="hero-copy">
            <p className="kicker"><span className="caret" aria-hidden="true">&gt;_</span> software engineer · creative technologist</p>
            <h1 className="name" aria-label="Sherone D’Souza">
              {nameLines.map((line) => (
                <span className="line" key={line} aria-hidden="true">
                  {[...line].map((ch, i) => (
                    <span className="ch" key={i}>{ch}</span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="lede">
              Backend systems by day, ray tracers and gesture-driven synths by night. I like code that’s fast, secure and a
              little bit magic.
            </p>
            <div className="ctas">
              <a className="btn btn-primary" href="#projects">See projects</a>
              <a className="btn" href={`mailto:${contact.email}`}>Email me</a>
            </div>
          </div>
          <Badge strip="Dev pass" role="Software engineer & creative technologist" />
        </section>

        <section className="section" aria-labelledby="about-h">
          <div className="wrap about">
            <h2 id="about-h">About</h2>
            <p className="about-text">{profile}</p>
          </div>
        </section>

        <ProjectCards />
        <Experience jobs={experience} intro="Backend engineering, product and the communities that got me here." />
        <StickerSheet groups={skills} />

        <section className="section" aria-labelledby="edu-h">
          <div className="wrap">
            <h2 id="edu-h">Education</h2>
            <ul className="edu">
              {education.map((e) => (
                <li className="edu-card" key={e.school}>
                  <p className="edu-meta"><span>{e.years}</span><span>GPA {e.gpa}</span></p>
                  <h3>{e.degree}</h3>
                  <p className="edu-school">{e.school}</p>
                  <p className="muted">{e.coursework}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Contact heading="Got a backend, an engine or a weird idea to build?" links={links} />
    </>
  )
}
