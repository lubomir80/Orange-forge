import { getNextProject, getProjectByName } from "@/data/project"
import ProjectDescription from "@/components/Project/Project-description";
import ProjectMainImage from "@/components/Project/Project-main-image";
import ProjectNavigation from "@/components/Project/Project-navigation";
import ProjectParagraph from "@/components/Project/Project-paragraph";
import NumberBox from "@/components/Number-box";
import ProjectAdditionalImages from "@/components/Project/Project-additional-images";

type Params = Promise<{ name: string }>


async function SingleProjectPage({ params }: { params: Params }) {
   const { name } = await params

   const project = await getProjectByName(name[0])



   const nextProject = await getNextProject(project?.name || "")




   if (project) {

      return (
         <>
            <ProjectMainImage {...project} />

            <div className="px-[20px] lg:px-[40px]">
               <ProjectDescription text={project.additionalInfo} />
               <ProjectParagraph text={project.paragraphs[0]} />
               <NumberBox
                  className="flex flex-wrap w-full"
                  paragraphClass="text-gray-500"
                  numbers={project.services} />
               <ProjectAdditionalImages {...project} />
               <ProjectParagraph text={project.paragraphs[1]} />
            </div>

            <ProjectNavigation nextProject={nextProject} />
         </>
      )
   }

}

export default SingleProjectPage