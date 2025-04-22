import { ProjectListType } from '@/types'
import Image from 'next/image'




function ProjectMainImage({ title, image, tags }: ProjectListType) {
   return (
      <div className=' mt-[-65px] lg:mt-[-95px] px-[20px] lg:px-[40px] pb-[20px] w-full aspect-16/9 
         rounded-b-2xl relative overflow-hidden text-white  flex flex-col justify-end'>
         <Image src={image.main} alt='' fill className='object-cover border-r border-primary-800 z-0' />

         <h1 className='z-10 mt-[24%] mb-[20px] text-[9.6vw] font-bold'>
            {title}
         </h1>
         <div className='flex gap-2 z-10'>
            {tags.map(tag => (
               <p key={title + tag}
                  className='font-bold uppercase rounded-full border-2 border-current px-3 py-1'>{tag}
               </p>
            ))
            }
         </div>
      </div>
   )
}

export default ProjectMainImage