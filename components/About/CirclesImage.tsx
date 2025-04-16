import Image from 'next/image'

function CirclesImage() {
   return (
      <div className='absolute top-[-140px] right-0 h-[280px] aspect-4/6 overflow-hidden'>
         <Image src="/circles.png" alt='' fill className='object-fill' />
      </div>
   )
}

export default CirclesImage