"use client"
import { AnimatePresence, motion } from "motion/react"


function AnimationPage({ children }: { children: React.ReactNode }) {
   return (
      <AnimatePresence>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
               duration: 1, type: "tween"
            }}
         >
            {children}
         </motion.div>
      </AnimatePresence>
   )
}

export default AnimationPage