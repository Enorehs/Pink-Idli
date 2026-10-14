import { useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { achievements, additional, contact, interests, profile } from './data'
import { ThemeToggle, type Theme } from './components/ThemeToggle'
import { Badge } from './components/Badge'
import { Experience } from './components/Experience'
import { StickerSheet } from './components/StickerSheet'
import { Contact } from './components/Contact'
import { Sparkles } from './components/Sparkles'

const nameLines = ['Sherone', 'D’Souza']
const floaties = ['♡', '✿', '☆', '🌸', '✦', '♡', '🎀', '✧', '✿', '♡', '☆', '🌸']

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme as Theme)
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <header className="top">
        <div className="wrap top-inner">
          <a href="#top" className="mono" aria-label="Back to top">S.D</a>
          <ThemeToggle theme={theme} onChange={setTheme} />
        </div>
      </header>

      <main id="top">
        <section className="wrap hero" aria-label="Intro">
          <div className="hero-copy">
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
              Marketing, brand, SEO and event strategist. I build campaigns people talk about, communities that
              stick around, and events I’m usually holding the mic at.
            </p>
            <div className="ctas">
              <a className="btn btn-primary" href="#work">See my work</a>
              <a className="btn" href={`mailto:${contact.email}`}>Email me</a>
            </div>
            <p className="kaomoji kawaii-only" aria-hidden="true">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
          </div>
          <Badge />
        </section>

        <section className="section" aria-labelledby="about-h">
          <div className="wrap about">
            <h2 id="about-h">About</h2>
            <p className="about-text">{profile}</p>
          </div>
        </section>

        <Experience />
        <StickerSheet />

        <section className="section" aria-label="Awards, side projects and interests">
          <div className="wrap extras">
            <div>
              <h2 className="h3">Awards</h2>
              <ul className="awards">
                {achievements.map((a) => (
                  <li className="award" key={a.title}>
                    <span className="award-year">{a.year}</span>
                    <span>{a.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="h3">Also on the crew</h2>
              <ul className="plain">
                {additional.map((a) => (
                  <li key={a.role}>
                    <strong>{a.role}</strong>
                    <span className="muted">{a.where}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="h3">Off the clock</h2>
              <ul className="tags">
                {interests.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Contact />
      {theme === 'kawaii' && (
        <>
          <Sparkles />
          <div className="floaties" aria-hidden="true">
            {floaties.map((g, i) => (
              <span
                key={i}
                style={{
                  left: `${(i * 8.3 + 3) % 100}%`,
                  fontSize: `${1 + ((i * 7) % 4) * 0.45}rem`,
                  animationDuration: `${18 + ((i * 5) % 14)}s`,
                  animationDelay: `-${(i * 3.7) % 20}s`,
                }}
              >
                {g}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  )
}
