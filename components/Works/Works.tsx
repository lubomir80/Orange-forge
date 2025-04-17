import ProjectBox from "./ProjectBox"


function Works() {
   return (
      <section id="works" className='px-[20px] md:px-[40px] pt-[65px] relative'>

         <h2 className='mb-[43px] text-[35px] font-bold'>
            Some of our best
            <strong className="header-orange"> projects</strong>
         </h2>

         <ProjectBox />

      </section>
   )
}

export default Works