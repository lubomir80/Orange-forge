import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function HeaderSocial({ className }: { className?: string }) {



   return (
      <div className={`[&>a]:text-orange-primary [&>a]:cursor-pointer flex gap-4 items-center ${className}`}>
         <Link href="/">
            <FaInstagram className="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px]" />
         </Link>
         <Link href="/">
            <FaFacebook className="w-[16px] h-[16px] xl:w-[18px] xl:h-[18px]" />
         </Link>
      </div>
   )
}

export default HeaderSocial