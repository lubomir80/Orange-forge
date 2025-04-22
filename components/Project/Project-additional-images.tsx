import { ProjectListType } from "@/types"
import Image from "next/image"
import TwoColumnGrid from "../TwoColumnGrid"


function ProjectAdditionalImages({ image }: ProjectListType) {
   return (
      <TwoColumnGrid className="mb-[40px]">
         <div className='aspect-square w-[100%] rounded-2xl overflow-hidden relative'>
            <Image src={image.additional[0]} alt="" fill className="object-cover border-r border-primary-800" />
         </div>
         <div className='aspect-square w-[100%] rounded-2xl overflow-hidden relative'>
            <Image src={image.additional[1]} alt="" fill className="object-cover border-r border-primary-800" />
         </div>
      </TwoColumnGrid>
   )
}

export default ProjectAdditionalImages