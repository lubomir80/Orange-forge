import { ProjectListType } from '@/types'


function ProjectComponent({ paragraphs, additionalInfo, services }: ProjectListType) {
   return (
      <>
         <h2 className="text-[25px] font-bold my-[25px]">
            {additionalInfo || "Long Title"}
         </h2>

         {paragraphs.map(par =>
            <p key={par + "para"} className="my-[25px]">
               {par}
            </p>
         )}

         <div className="max-w-[540px]">
            <ul className="flex gap-[22px]">
               {services.map((item, index) =>
                  <div key={index + item.number}
                     className="mb-[50px] w-[50%] lg:w-[25%] bg-transparent border-none shadow-nones">
                     <h2 className="text-[35px] font-bold lg:text-[67.7px]">
                        {item.number}
                        <span>{item.symbol}</span>
                     </h2>
                     <p className="text-gray-400 max-w-[220px]">{item.des}</p>
                  </div>
               )}
            </ul>
         </div>
      </>
   )
}

export default ProjectComponent