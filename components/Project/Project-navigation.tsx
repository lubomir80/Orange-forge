import { ProjectListType } from "@/types"
import Link from "next/link";
import TwoColumnGrid from "../TwoColumnGrid";
import ProjectLinkItem from "../Project-link-item";
import Box from "../Box";

type NavigationProps = {
   nextProject: ProjectListType
}



async function ProjectNavigation({ nextProject }: NavigationProps) {

   return (
      <Box className="bg-grey rounded-t-3xl pt-[35px] pb-[85px] mb-[-20px]">
         <TwoColumnGrid>
            <ProjectLinkItem {...nextProject} />
            <div className='md:flex md:justify-center md:items-center'>
               <Link
                  href={nextProject.name}
                  className="font-bold text-[45px]/15 lg:text-[75px]/25 link-orange">
                  Next <br /> Project
               </Link>
            </div>
         </TwoColumnGrid>
      </Box>
   )
}

export default ProjectNavigation