import Image from 'next/image'
import AnimationTextCycle from '../Animation/AnimationTextCycle'



function HeadingTitle() {
   return (
      <div className='text-[9.7vw] xl:text-[7vw] mt-[95px] mb-[70px] flex flex-wrap leading-[1.3] 
      xl:mb-[max(16vw,_180px)] xl:mt-[max(15vw,_300px)] 
      xl:flex-nowrap xl:text-center  xl:items-center xl:gap-6 font-bold w-full relative'>
         <p className='w-full xl:whitespace-nowrap xl:w-fit'>We Create</p>
         <div className='w-[0.8em] xl:w-[1em]  mr-[12px] ml-[12vw] xl:mx-[0.3em] xl:aspect-[3/4] relative'>
            <Image src="/Fire.png" alt='fire' fill />
         </div>
         <AnimationTextCycle />
      </div>
   )
}

export default HeadingTitle