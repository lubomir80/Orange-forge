import FooterInformation from './Footer-information'
import FooterForm from './Footer-form'

function Footer() {
   return (
      <footer
         id="Hire-us"
         className=' px-[20px] sm:px-[40px] pt-[40px] pb-[60px] lg:pt-[60px] lg:pb-[80px] rounded-t-2xl bg-background-footer text-white'>
         <div className='flex flex-col gap-15 lg:flex-row'>
            <FooterInformation />
            <FooterForm />
         </div>
      </footer>
   )
}

export default Footer