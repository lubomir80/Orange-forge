import Image from "next/image"
import BackgroundImg from "@/public/Splines2.png"
import LogoCarousel from "./Logo-carousel"
import PartnerForm from "./Partner-form"


function Contact() {
   return (
      <section id="contact" className='pt-[65px] pb-[175px] relative z-0'>
         <Image src={BackgroundImg} alt="" className="absolute top-[10%] right-0 w-[90%] -z-20" />

         <div className="px-[20px] md:px-[40px]">
            <h2 className='mb-[43px] text-[48px] font-bold max-w-[50vw]'>
               Will be our
               <strong className="header-orange"> partner</strong>
            </h2>
            <PartnerForm />
         </div>

         <LogoCarousel />
      </section>
   )
}

export default Contact