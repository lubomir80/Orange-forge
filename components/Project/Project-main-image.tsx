import { ProjectListType } from '@/types'
import Image from 'next/image'
import Tags from '../Tags'
import Box from '../Box'




function ProjectMainImage({ title, image, tags }: ProjectListType) {
   return (
      <div className='mt-[-65px] lg:mt-[-95px] 2xl:mt-[-6vw] pb-[20px] w-full aspect-16/9 xl:aspect-100/45
         rounded-b-2xl md:rounded-b-4xl relative overflow-hidden text-white flex flex-col justify-end '>
         <Image src={image.main} alt='' fill className='object-cover border-r border-primary-800 z-0' />

         <Box className='z-10 flex flex-col gap-5 md:gap-8 flex-1 justify-end md:justify-center mt-[65px] lg:mt-[95px] 2xl:mt-[6vw]'>
            <h1 className='text-[9.6vw] font-bold leading-none xl:w-[50%]'>
               {title}
            </h1>
            <Tags tags={tags} className='flex-wrap' />
         </Box>

      </div>
   )
}

export default ProjectMainImage