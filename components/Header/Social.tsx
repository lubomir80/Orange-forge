import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Social() {
   return (
      <div className="[&>a]:text-orange-primary [&>a]:cursor-pointer flex gap-4 items-center ml-[1.2vw] mr-[80px]">
         <Link href="/">
            <FaInstagram className="w-[16px] h-[16px]" />
         </Link>
         <Link href="/">
            <FaFacebook className="w-[16px] h-[16px]" />
         </Link>
      </div>
   )
}

export default Social