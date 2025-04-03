import Link from "next/link";


const navLinks = [
   { name: "About", href: "/#about" },
   { name: "Works", href: "/#works" },
   { name: "Contact", href: "/#contact" },
];


function Navigation() {
   return (
      <nav className="ml-[9vw]">
         <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
               <li key={index}>
                  <Link href={link.href} className="hover:text-orange-primary transition">
                     {link.name}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export default Navigation