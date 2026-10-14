import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { achievements, additional, contact, experience, interests, profile, skills } from './data'
import './resume.css'

// Print-first resume page (A4). Export: open resume.html and print, or use headless Edge --print-to-pdf.
function Resume() {
  const links = [
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: contact.phone, href: `tel:${contact.phoneHref}` },
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'Beacons', href: contact.beacons },
  ].filter((l) => l.href !== '#')

  const jobList = (jobs: typeof experience) =>
    jobs.map((job) => (
      <article className="job" key={job.company}>
        <h3>{job.role} <span>{job.company}</span></h3>
        <ul>
          {job.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </article>
    ))

  // ponytail: split is hand-tuned for 2 A4 sheets; re-check the PDF if data.ts grows.
  return (
    <main>
    <div className="sheet">
      <header className="head">
        <div className="cat" aria-hidden="true">•ᴗ•</div>
        <div className="head-text">
          <h1>Sherone D’Souza</h1>
          <p className="title">Marketing, brand, SEO &amp; event strategist. Creator.</p>
          <ul className="contact">
            {links.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <span className="bow" aria-hidden="true">🎀</span>
      </header>

      <div className="cols">
        <section className="main">
          <h2>Profile</h2>
          <p className="profile">{profile}</p>

          <h2>Experience</h2>
          {jobList(experience.slice(0, 3))}
        </section>

        <aside className="side">
          <div className="card">
            <h2>Awards</h2>
            <ul className="awards">
              {achievements.map((a) => (
                <li key={a.title}><b>{a.year}</b> {a.title}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>Also on the crew</h2>
            <ul className="crew">
              {additional.map((a) => (
                <li key={a.role}><b>{a.role}</b><span>{a.where}</span></li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>Off the clock</h2>
            <ul className="pills">
              {interests.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </div>

    <div className="sheet">
      <div className="cols">
        <section className="main">
          <h2>Experience, continued</h2>
          {jobList(experience.slice(3))}
        </section>

        <aside className="side">
          <div className="card">
            <h2>Skills</h2>
            {skills.map((g) => (
              <div className="skill-group" key={g.group}>
                <h3>{g.group}</h3>
                <ul className="pills">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
