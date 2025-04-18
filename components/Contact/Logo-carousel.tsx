import Image from 'next/image';
import { partnerLogos } from '@/data';


function LogoCarousel() {
   const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos]

   return (
      <div className="relative w-full mt-[100px] overflow-hidden">
         <div className="flex animate-scroll gap-36 items-center h-40 ">
            {logos.map((img, i) => (
               <Image
                  key={i}
                  src={img}
                  alt=""
                  className="min-w-[150px] rounded-md flex items-center justify-center text-xl font-semibold"
               />
            ))}
         </div>
      </div>
   )
}

export default LogoCarousel