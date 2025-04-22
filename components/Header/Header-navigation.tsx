
import Link from "next/link";


const navLinks = [
   ["About", "/#about"],
   ["Works", "/#works"],
   ["Contact", "/#contact"]
];


function HeaderNavigation() {
   return (
      <nav className="hidden ml-[9vw] lg:block xl:text-[18.5px]">
         <ul className="flex space-x-6">
            {navLinks.map(([name, href], index) => (
               <li key={index}>
                  <Link href={href} className="hover:text-orange-primary transition">
                     {name}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export default HeaderNavigation