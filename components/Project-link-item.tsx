import { ProjectListType } from '@/types';
import { getMarginClass } from '@/utils/helpers';
import Image from "next/image";
import Link from "next/link"
import OrangeBg from "@/public/Projects/orangBG.png"

type ProjectListProps = ProjectListType & {
   index?: number
};

function ProjectLinkItem({ title, image, name, tags, index }: ProjectListProps) {
   return (
      <Link
         href={`/project/${name}`}
         className={`text-white group block md:mb-6 xl:mb-12 aspect-square bg-amber-600 rounded-2xl overflow-hidden relative ${getMarginClass(index)}`}>

         <Image src={image.main} fill alt={`Cabin ${title}`}
            className="object-cover border-r border-primary-800" />

         <div className="top-0 left-0 w-full h-full z-0 p-6 rounded-2xl       overflow-hidden transition-all duration-300 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
            <Image className='-z-10' src={OrangeBg} alt='Orange bg' fill />
            <div className='flex flex-col justify-between h-full'>
               <div>
                  <h4 className='text-[36px] font-bold mb-2'>{name}</h4>
                  <p>{title}</p>
               </div>
               <div className='flex gap-2'>
                  {tags.map(tag => (
                     <p key={name + tag}
                        className='font-bold uppercase rounded-full border-2 border-current px-3 py-1'>{tag}
                     </p>
                  ))
                  }
               </div>
            </div>
         </div>
      </Link>
   )
}

export default ProjectLinkItem