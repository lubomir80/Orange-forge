import ProjectComponent from "@/components/Project/Project-component";
import ProjectMainImage from "@/components/Project/Project-main-image";
import ProjectNavigation from "@/components/Project/Project-navigation";
import { getProjectByName } from "@/data/project"


type Params = Promise<{ name: string }>


async function SingleProjectPage({ params }: { params: Params }) {
   const { name } = await params
   const project = await getProjectByName(name[0])

   console.log(project);

   if (project) {
      return (
         <>
            <ProjectMainImage {...project} />

            <div className="px-[20px] lg:px-[40px]">
               <ProjectComponent {...project} />
               <ProjectNavigation />
            </div>
         </>
      )
   }

}

export default SingleProjectPage