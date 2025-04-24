import React from 'react'
import ProjectMainImage from './Project-main-image'
import Box from '../Box'
import ProjectDescription from './Project-description'
import ProjectParagraph from './Project-paragraph'
import NumberBox from '../Number-box'
import ProjectAdditionalImages from './Project-additional-images'
import ProjectNavigation from './Project-navigation'
import { getNextProject, getProjectByName } from '@/data/project'

async function Project({ name }: { name: string }) {

   const project = await getProjectByName(name[0])
   const nextProject = await getNextProject(project?.name || "")

   if (project) {
      return (
         <>
            <ProjectMainImage {...project} />

            <Box className="md:my-[max(20px,_6.04vw)]">
               <div className="space-y-5 md:space-y-10">

                  <div className="lg:pl-[10vw] space-y-5 md:space-y-10">
                     <ProjectDescription text={project.additionalInfo} />
                     <ProjectParagraph text={project.paragraphs[0]} />
                     <NumberBox
                        className="flex flex-wrap w-full"
                        paragraphClass="text-gray-500"
                        numbers={project.services} />
                  </div>

                  <ProjectAdditionalImages {...project} />

                  <div className="lg:pl-[10vw] space-y-5 md:space-y-10">
                     <ProjectParagraph text={project.paragraphs[1]} />
                     <ProjectParagraph text={project.paragraphs[1]} />
                  </div>

               </div>
            </Box>

            <ProjectNavigation nextProject={nextProject} />
         </>
      )
   }

}

export default Project