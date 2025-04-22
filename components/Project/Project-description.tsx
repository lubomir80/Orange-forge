

function ProjectDescription({ text }: { text: string }) {
   return (
      <h2 className="text-[25px] font-bold my-[25px] max-w-[650px]">
         {text || "Project Description"}
      </h2>
   )
}

export default ProjectDescription