import Box from "../Box"
import AboutCarouselBox from "./About-carousel-box"
import AboutServiceTotal from "./About-service-total"
import AboutCirclesImage from "./About-circles-image"
import AboutCircleImage from "./About-circle-image"


function About() {
   return (
      <section id="about" className=' bg-grey rounded-3xl pt-[43.5px] pb-[35px] lg:pt-[max(11vw,_35px)] lg:pb-[max(5.5vw,_35px)] relative'>
         <AboutCircleImage />
         <AboutCirclesImage />

         <Box>
            <h2 className='relative z-10 mb-[20px] md:mb-[30px] text-[35px] font-bold sm:text-[max(6vw,_48px)] sm:max-w-[50vw] sm:pr-20 sm:leading-none '>
               Our preferences
            </h2>
            <p className='relative z-10 max-w-[400px] mb-[20px] md:max-w-[500px]'>
               We use only modern technologies and solutions. Despite Software is the best partner for your digital journey with a huge team of experienced, talented, and workaholic techies. We build for your business new digital product, improve existing ones, and innovate within their business domain or help you in building your own dedicated team of experts.
            </p>
         </Box>

         <AboutCarouselBox />

         <Box>
            <AboutServiceTotal />
         </Box>
      </section>
   )
}

export default About