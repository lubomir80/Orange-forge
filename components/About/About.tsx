import CarouselBox from "./CarouselBox"
import ServiceTotal from "./Service-total"
import CirclesImage from "./CirclesImage"
import CircleImage from "./CircleImage"


function About() {
   return (
      <section id="about" className='px-[20px] md:px-[40px] bg-grey rounded-3xl pt-[43.5px] pb-[35px] relative'>
         <CircleImage />
         <CirclesImage />

         <h2 className='relative z-10 mb-[20px] text-[35px] font-bold'>Our preferences</h2>
         <p className='relative z-10 max-w-[400px] mb-[20px]'>We use only modern technologies and solutions. Despite Software is the best partner for your digital journey with a huge team of experienced, talented, and workaholic techies. We build for your business new digital product, improve existing ones, and innovate within their business domain or help you in building your own dedicated team of experts.
         </p>

         <CarouselBox />
         <ServiceTotal />
      </section>
   )
}

export default About