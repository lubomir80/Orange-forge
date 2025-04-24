import Box from "../Box"
import Image from "next/image"
import BackgroundImg from "@/public/Splines2.png"
import ContactCarousel from "./Contact-carousel"
import ContactForm from "./Contact-form"


function Contact() {
   return (
      <section id="contact" className='pt-[65px] pb-[175px] lg:pt-[max(100px,_18.4vw)] lg:pb-[max(175px,_15vw)] relative z-0 overflow-hidden'>
         <Image src={BackgroundImg} alt="" className="absolute top-[10%] right-0 w-[90%] lg:w-[65%] -z-20" />

         <Box>
            <h2 className='mb-[43px] lg:mb-[max(40px,_4.65vw)] leading-none text-[48px] lg:text-[7vw] max-w-[50vw] font-bold'>
               Will be our
               <strong className="header-orange"> partner</strong>
            </h2>
            <ContactForm />
         </Box>

         <ContactCarousel />
      </section>
   )
}

export default Contact