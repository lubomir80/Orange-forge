import FooterInformation from './Footer-information'
import FooterForm from './Footer-form'

function Footer() {
   return (
      <footer
         id="Hire-us"
         className='px-[20px] sm:px-[40px] pt-[40px] pb-[60px] md:pt-[60px] md:pb-[80px] xl:py-[10.4vw] rounded-t-2xl bg-background-footer text-white'>
         <div className='flex flex-col gap-15 lg:flex-row xl:px-[6.95vw] lg:gap-[10vw]'>
            <FooterInformation />
            <FooterForm />
         </div>
      </footer>
   )
}

export default Footer