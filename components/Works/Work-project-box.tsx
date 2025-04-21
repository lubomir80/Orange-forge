import { projectList } from '@/data';
import { ProjectListType } from '@/types';
import WorkProjectItem from './Work-project-item'




const projects: ProjectListType[] = projectList


function WorkProjectBox() {
   return (
      <div className='flex flex-col gap-5 md:gap-0 md:flex-row md:flex-wrap justify-between'>
         {projects.map((project, index) =>
            <WorkProjectItem key={project.title} {...project} index={index + 1} />)}
      </div>
   )
}

export default WorkProjectBox