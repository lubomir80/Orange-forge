"use client"
import { motion, animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "motion/react"
import { useRef } from "react"

type AnimationCounterProps = {
   from: number,
   to: number,
   animationOptions?: KeyframeOptions
}

function AnimationCounter({ from, to, animationOptions }: AnimationCounterProps) {
   const ref = useRef<HTMLSpanElement>(null)
   const inView = useInView(ref, { once: true })


   useIsomorphicLayoutEffect(() => {
      const element = ref.current;

      if (!element) return
      if (!inView) return

      element.textContent = String(from)

      const controls = animate(from, to, {
         duration: 1.5,
         ease: "easeOut",
         ...animationOptions,
         onUpdate(value) {
            element.textContent = String(value.toFixed())
         }
      })

      return () => {
         controls.stop()
      }
   }, [ref, from, to, inView])

   return (
      <motion.span ref={ref} />
   )
}

export default AnimationCounter