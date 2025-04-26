import Image from 'next/image'
import Link from 'next/link'
import LogoImg from "/public/Logo.png"


function Logo({ close }: { close: () => void }) {
   return (
      <Link
         onClick={close}
         href="/" className='z-100 flex items-center justify-center text-[22px] md:text-[27px] hover:text-orange-primary transition'>
         <div className='w-[24px] h-[38px] md:w-[30px] md:h-[47px] mr-2'>
            <Image src={LogoImg} alt="Logo" width={200} height={100} />
         </div>
         <b>orange</b>
         forge
      </Link>
   )
}

export default Logo