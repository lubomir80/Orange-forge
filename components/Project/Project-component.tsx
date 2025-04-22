import { ProjectListType } from '@/types'
import Image from 'next/image'


function ProjectComponent({ paragraphs, image }: ProjectListType) {
   return (
      <>


         <div className='flex flex-wrap gap-5 md:flex-nowrap my-[25px]'>
            <div className='aspect-square w-[100%] rounded-2xl overflow-hidden relative'>
               <Image src={image.additional[0]} alt="" fill className="object-cover border-r border-primary-800" />
            </div>
            <div className='aspect-square w-[100%] rounded-2xl overflow-hidden relative'>
               <Image src={image.additional[1]} alt="" fill className="object-cover border-r border-primary-800" />
            </div>
         </div>



         <p className='my-[25px]'>{paragraphs[1]}</p>
      </>
   )
}

export default ProjectComponent