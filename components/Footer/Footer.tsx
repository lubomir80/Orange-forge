import FooterInformation from './Footer-information'
import FooterForm from './Footer-form'
import Box from '../Box'

function Footer() {
   return (
      <footer
         id="Hire-us"
         className='rounded-t-2xl bg-background-footer text-white'>
         <Box className='pt-[40px] pb-[60px] md:pt-[60px] md:pb-[80px] xl:py-[10.4vw]'>
            <div className='flex flex-col gap-15 lg:flex-row xl:px-[6.95vw] lg:gap-[10vw]'>
               <FooterInformation />
               <FooterForm />
            </div>
         </Box>
      </footer>
   )
}

export default Footer