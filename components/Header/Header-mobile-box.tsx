import { AnimatePresence } from "motion/react"
import HeaderMobileNav from "./Header-mobile-nav"
import HeaderBurger from "./Header-burger"


type MobileBoxProps = {
   isOpen: boolean,
   close: () => void,
   toggle: () => void
}


function HeaderMobileBox({ isOpen, close, toggle }: MobileBoxProps) {
   return (
      <div className="lg:hidden">
         <AnimatePresence>
            {isOpen ?
               <HeaderMobileNav close={close} /> : null}
         </AnimatePresence>

         <HeaderBurger isOpen={isOpen} toggle={toggle} />
      </div>
   )
}

export default HeaderMobileBox