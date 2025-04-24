import Image from 'next/image';
import { partnerLogos } from '@/data';


function ContactCarousel() {
   const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]

   return (
      <div className="relative w-full mt-[100px] overflow-hidden lg:mt-[150px]">
         <div className="flex animate-scroll gap-36 items-center h-40 lg:h-60">
            {logos.map((img, i) => (
               <Image
                  key={i}
                  src={img}
                  alt=""
                  className="min-w-[150px] lg:min-w-[180px] rounded-md flex items-center justify-center text-xl font-semibold"
               />
            ))}
         </div>
      </div>
   )
}

export default ContactCarousel