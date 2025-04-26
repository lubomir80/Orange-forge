import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import CircleImage from "/public/Circle.png"
import { useRef } from 'react'


function AboutCircleImage() {
   const ref = useRef<HTMLDivElement>(null)

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end end"]
   })

   const left = useTransform(scrollYProgress, [0, 1], ["0", "5%"])


   return (
      <div
         className='absolute top-0 left-0 w-full'>
         <motion.div
            ref={ref}
            style={{ left }}
            className='absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2 sm:translate-x-[20vw] overflow-hidden aspect-[1/1] w-[max(94px,_12.67%)]'>
            <Image src={CircleImage} alt='' fill className='object-cover' />
         </motion.div>
      </div>
   )
}

export default AboutCircleImage