import { projectList } from "@/data/index"


export const getProjectByName = async (projectName: string | undefined) => {
   try {
      const project = projectList.find(prj => prj.name === projectName)
      return project
   } catch {
      return null
   }
}