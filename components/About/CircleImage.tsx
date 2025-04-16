import Image from 'next/image'
import React from 'react'

function CircleImage() {
   return (
      <div className='absolute top-[-77px] left-[-34px] w-full aspect-1/1 overflow-hidden h-[95px] w-full'>
         <Image src="/circle.png" alt='' width={94} height={94} />
      </div>
   )
}

export default CircleImage