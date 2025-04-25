import Image from 'next/image'

function HeadingImage() {
   return (
      <div className='-z-10 absolute top-0 right-0 w-full aspect-4/3 overflow-hidden'>
         <Image src="/Splines.png" alt='' className='object-cover' fill />
      </div>
   )
}

export default HeadingImage