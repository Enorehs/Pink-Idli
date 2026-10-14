import { useEffect } from 'react'
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'motion/react'

const STRAP = 150 // lanyard length in px; must match .badge top in theme.css

export function Badge() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const reduce = useReducedMotion()
  // The badge always hangs with its clip pointing at the anchor.
  const rotate = useTransform(() => (-Math.atan2(x.get(), STRAP + y.get()) * 180) / Math.PI)
  const strap = useTransform(() => `M0 0 L${x.get()} ${STRAP + y.get()}`)

  useEffect(() => {
    if (reduce) return
    x.set(140)
    const swing = animate(x, 0, { type: 'spring', stiffness: 50, damping: 3.5, delay: 0.35 })
    return () => swing.stop()
  }, [reduce, x])

  return (
    <motion.div
      className="stage"
      initial={reduce ? false : { y: -700 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.2 }}
    >
      <svg className="lanyard" width="1" height="1" aria-hidden="true">
        <motion.path d={strap} className="strap" />
        <motion.path d={strap} className="strap-stitch" />
      </svg>
      <motion.div
        className="badge"
        drag
        dragSnapToOrigin
        dragElastic={0.6}
        dragTransition={{ bounceStiffness: 120, bounceDamping: 6 }}
        whileDrag={{ cursor: 'grabbing' }}
        style={{ x, y, rotate }}
        role="img"
        aria-label="Event badge: Sherone D'Souza, brand, SEO and event strategist"
      >
        <span className="clip" />
        <span className="bow">🎀</span>
        <div className="badge-strip">Creator pass</div>
        <div className="badge-body">
          <div className="badge-photo">SD</div>
          <p className="badge-name">Sherone D’Souza</p>
          <p className="badge-role">Brand, SEO &amp; event strategist</p>
        </div>
        <div className="badge-foot">
          <span className="barcode" />
          <span>Drag me</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
