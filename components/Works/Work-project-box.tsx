import { projectList } from '@/data';
import { ProjectListType } from '@/types';
import TwoColumnGrid from '../TwoColumnGrid';
import WorkProjectItem from './Work-project-item';

const projects: ProjectListType[] = projectList


function WorkProjectBox() {
   return (
      <TwoColumnGrid className='lg:gap-x-6'>
         {projects.map((project, index) =>
            <WorkProjectItem key={project.title} {...project} index={index + 1} />)}
      </TwoColumnGrid>
   )
}

export default WorkProjectBox