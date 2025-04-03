import Image from 'next/image'
import Link from 'next/link'


function Logo() {
   return (
      <div>
         <Link href="/" className='flex items-center justify-center text-[22px] md:text-[27px] hover:text-orange-primary transition'>
            <div className='w-[24px] h-[38px] md:w-[30px] md:h-[47px] mr-2'>
               <Image src="/logo.png" alt="Logo" width={200} height={100} />
            </div>
            <b>orange</b>
            forge
         </Link>
      </div>
   )
}

export default Logo