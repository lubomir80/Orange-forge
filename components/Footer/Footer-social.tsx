import Link from 'next/link'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const iconSize = 16

const socialLinks = [
   {
      social: "Instagram",
      link: "/",
      icon: <FaInstagram size={iconSize} />
   },
   {
      social: "Twitter",
      link: "/",
      icon: <FaTwitter size={iconSize} />
   },
   {
      social: "Facebook",
      link: "/",
      icon: <FaFacebook size={iconSize} />
   }
]


function FooterSocial() {
   return (
      <div>
         <h3 className="text-[24px] text-white/50 mb-[10px]">We on social</h3>
         <ul className='flex gap-2 '>
            {socialLinks.map((social) =>
               <li key={social.social} className='group relative'>
                  <Link
                     className='p-1 inline-block group-hover:text-orange-primary transition-all'
                     href={social.link}>
                     {social.icon}
                  </Link>
               </li>)}
         </ul>
      </div>
   )
}

export default FooterSocial