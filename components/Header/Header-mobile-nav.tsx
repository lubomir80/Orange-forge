import { motion } from "motion/react"
import Link from "next/link";
import HireBtn from "./Hire-btn";
import Social from "./Social";
import Language from "./Language";
import { bounds } from "leaflet";

const navLinks = [
   ["About", "/#about"],
   ["Works", "/#works"],
   ["Contact", "/#contact"]
];



function HeaderMobileNav({ close }: { close: () => void }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0 }}
         className="absolute w-full bg-white h-[calc(100vh-64px)] top-[64px] left-0 z-50
         pt-[75px] px-[11vw] pb-[30px] overflow-y-auto">

         <nav>
            <ul className="flex flex-col gap-12">
               {navLinks.map(([name, href], index) => (
                  <li key={index}>
                     <Link
                        onClick={close}
                        href={href}
                        className="hover:text-orange-primary transition text-[25px]">
                        {name}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
         <HireBtn className="mt-16 ml-[-11px]" />
         <Social className="my-12" />
         <Language className="ml-[-11px] " />

      </motion.div>
   )
}

export default HeaderMobileNav