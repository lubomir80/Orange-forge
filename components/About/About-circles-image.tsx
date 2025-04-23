import Image from 'next/image'

function CirclesImage() {
   return (
      <div className='absolute top-0 right-0 w-[200px] sm:w-[max(300px,_36%)] -translate-y-1/2 sm:-translate-y-1/3 aspect-4/6 overflow-hidden'>
         <Image src="/circles.png" alt='' fill className='object-fill' />
      </div>
   )
}

export default CirclesImage