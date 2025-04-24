import { projectList } from '@/data';
import { ProjectListType } from '@/types';
import TwoColumnGrid from '../TwoColumnGrid';
import ProjectLinkItem from '../Project-link-item';

const projects: ProjectListType[] = projectList


function WorkProjectBox() {
   return (
      <TwoColumnGrid className='xl:gap-x-6'>
         {projects.map((project, index) =>
            <ProjectLinkItem key={project.title} {...project} index={index + 1} />)}
      </TwoColumnGrid>
   )
}

export default WorkProjectBox