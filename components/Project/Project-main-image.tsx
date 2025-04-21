import { ProjectListType } from '@/types'
import Image from 'next/image'




function ProjectMainImage({ title, image, tags }: ProjectListType) {
   return (
      <div className='mt-[-65px] bg-amber-200 w-full aspect-16/9 
         rounded-b-2xl relative overflow-hidden'>
         <Image src={image.main} alt='' className='bg-cover bg-bottom bg-right' />


      </div>
   )
}

export default ProjectMainImage