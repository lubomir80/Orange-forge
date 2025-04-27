"use client"

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react'

const words = ["Projects", "eCommerce", "Software", "Applications", "Systems"]


function AnimationTextCycle() {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const intervalId = setInterval(() => {
         setIndex(prevIndex => (prevIndex + 1) % words.length);
      }, 3000)

      return () => clearInterval(intervalId)
   }, []);


   return (

      <AnimatePresence mode="popLayout">
         <motion.div
            className='overflow-hidden leading-[1.3]'
            key={index}
            initial={{ y: '20%', opacity: 1 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '0%', opacity: 1 }}
         >

            {words[index].split('').map((letter, index) => {
               return (
                  <motion.span
                     className='text-black inline-block '
                     key={index}
                     initial={{ opacity: 0, scale: 1.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0 }}
                     transition={{ delay: 0.08 * index }}
                  >
                     {letter}
                  </motion.span>
               )
            }
            )}
         </motion.div>
      </AnimatePresence>

   )
}

export default AnimationTextCycle