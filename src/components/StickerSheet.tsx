import { useRef } from 'react'
import { motion } from 'motion/react'
import { skills } from '../data'

// Drag needs touch-action: none, which would block scrolling on phones.
const canDrag = matchMedia('(pointer: fine)').matches

export function StickerSheet({ groups = skills }: { groups?: { group: string; items: string[] }[] }) {
  const sheet = useRef<HTMLDivElement>(null)

  return (
    <section className="section" id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <h2 id="skills-h">Skills</h2>
        <p className="muted">{canDrag ? 'They’re stickers. Peel them around the sheet.' : 'The full kit, sorted by what it’s for.'}</p>
        <div className="sheet" ref={sheet}>
          {groups.map((g, gi) => (
            <div className="sticker-group" key={g.group}>
              <h3>{g.group}</h3>
              <ul className="stickers">
                {g.items.map((s, i) => (
                  <motion.li
                    key={s}
                    className="sticker"
                    data-tone={(gi + i) % 4}
                    drag={canDrag}
                    dragConstraints={sheet}
                    dragElastic={0.15}
                    whileHover={{ scale: 1.06 }}
                    whileDrag={{ scale: 1.15, rotate: 0 }}
                    style={{ rotate: ((gi * 7 + i * 13) % 9) - 4 }}
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
