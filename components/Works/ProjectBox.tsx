import { projectList } from '@/data';
import { ProjectListType } from '@/types';
import ProjectItem from './ProjectItem'




const projects: ProjectListType[] = projectList


function ProjectBox() {
   return (
      <div className='flex flex-col gap-5 md:gap-0 md:flex-row md:flex-wrap justify-between'>
         {projects.map((project, index) =>
            <ProjectItem key={project.title} {...project} index={index + 1} />)}
      </div>
   )
}

export default ProjectBox