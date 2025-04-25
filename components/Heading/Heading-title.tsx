
import { motion } from 'motion/react'
import Image from 'next/image'



function HeadingTitle() {
   return (
      <div className='text-[9.7vw] xl:text-[7vw] mt-[95px] mb-[70px] flex flex-wrap leading-none xl:mb-[max(16vw,_180px)] xl:mt-[max(20vw,_300px)] 
      xl:flex-nowrap xl:text-center  xl:items-center xl:gap-6 font-bold w-full '>
         <p className='w-full xl:whitespace-nowrap xl:w-fit'>We Create</p>
         <div className='w-[0.8em] relative mr-[12px] ml-[12vw] xl:mx-[0.3em] xl:aspect-[3/4] xl:w-[1em]'>
            <Image src="/Fire.png" alt='fire' fill />
         </div>
         <motion.span
            initial={{ color: "#fe5616" }}
            animate={{ color: ["#fe5616", "#ca410a", "#ff0000", "#333", "#fe5616"] }}
            transition={{ duration: 5, repeat: Infinity }}>
            Systems
         </motion.span>
      </div>
   )
}

export default HeadingTitle