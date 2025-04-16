import Image from 'next/image'


function HeadingTitle() {
   return (
      <div className='text-[45px] font-bold mt-[150px] mb-[70px] flex flex-wrap'>
         <p className='w-full'>We Create</p>
         <div className='w-[45px] h-[65px] relative mr-[12px] ml-[12vw]'>
            <Image src="/Fire.png" alt='fire' fill />
         </div>
         <p>Systems</p>
      </div>
   )
}

export default HeadingTitle