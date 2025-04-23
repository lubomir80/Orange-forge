import Image from 'next/image'


function AboutCircleImage() {
   return (
      <div className='absolute top-0 left-0 w-full'>
         <div className='absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2 sm:translate-x-[20vw]
          overflow-hidden aspect-[1/1] w-[max(94px,_12.67%)]'>
            <Image src="/circle.png" alt='' fill className='object-cover' />
         </div>
      </div>
   )
}

export default AboutCircleImage