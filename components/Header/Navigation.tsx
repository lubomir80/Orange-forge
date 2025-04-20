import Link from "next/link";


const navLinks = [
   ["About", "/#about"],
   ["Works", "/#works"],
   ["Contact", "/#contact"]
];


function Navigation() {
   return (
      <nav className="ml-[9vw]">
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

export default Navigation