import Box from "../Box"
import WorkProjectBox from "./Work-project-box"


function Works() {
   return (
      <section id="works" className='pt-[65px] relative'>
         <Box>
            <h2 className=' mb-[43px] text-[35px] sm:text-[max(6vw,_48px)] font-bold sm:w-[50vw] leading-none'>
               Some of our best
               <strong className="header-orange"> projects</strong>
            </h2>
            <WorkProjectBox />
         </Box>
      </section>
   )
}

export default Works