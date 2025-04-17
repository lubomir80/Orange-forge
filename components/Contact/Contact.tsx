import LogoCarousel from "./Logo-carousel"
import PartnerForm from "./Partner-form"


function Contact() {
   return (
      <section id="contact" className='px-[20px] md:px-[40px] pt-[65px] relative'>

         <h2 className='mb-[43px] text-[48px] font-bold max-w-[50vw]'>
            Will be our
            <strong className="header-orange"> partner</strong>
         </h2>

         <PartnerForm />
         <LogoCarousel />
      </section>
   )
}

export default Contact