import { projectList } from "@/data/index"


export const getProjectByName = async (projectName: string | undefined) => {
   const project = projectList.find(prj => prj.name === projectName)


   if (!project) {
      throw new Error(`"${projectName}"`);
   }

   return project
}


export const getAllProjects = async () => {
   try {
      const projects = projectList
      return projects
   } catch {
      return null
   }
}


export const getNextProject = async (projectName: string) => {
   const projects = await getAllProjects() || []
   const currentIndex = projects?.findIndex(obj => obj.name === projectName)
   const nextProject = projects[currentIndex + 1] || projects[0];

   return nextProject
}