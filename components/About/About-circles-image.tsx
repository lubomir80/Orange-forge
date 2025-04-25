import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'

function CirclesImage() {
   const ref = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "end center"]
   })

   const top = useTransform(scrollYProgress, [0, 1], ["0", "7%"])

   return (
      <motion.div
         ref={ref}
         style={{ top }}
         className='absolute top-0 right-0 w-[200px] sm:w-[max(300px,_36%)] -translate-y-1/2 sm:-translate-y-1/3 aspect-1/1 md:aspect-5/6 overflow-hidden transition-all'>
         <div>
            <Image src="/circles.png" alt='' fill className='object-fill' />
         </div>
      </motion.div>
   )
}

export default CirclesImage