"use client"

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import { useRef, useState, useEffect } from 'react'
import Logo from './Logo'
import HeaderBurger from "./Header-burger"
import HeaderMobileNav from "./Header-mobile-nav"
// import HireBtn from './Hire-btn'
// import Language from './Language'
// import Menu from './Menu'
// import Navigation from './Navigation'
// import Social from './Social'



function Header() {
   const [isHidden, setIsHidden] = useState(false)
   const [isTransparent, setIsTransparent] = useState(false)
   const [isOpen, setIsOpen] = useState(false)

   const lastYRef = useRef(0)
   const { scrollY } = useScroll()


   useMotionValueEvent(scrollY, "change", (y) => {
      y < 50 ? setIsTransparent(true) : setIsTransparent(false)

      const difference = y - lastYRef.current
      if (Math.abs(difference) > 50) {
         setIsHidden(difference > 0)
         lastYRef.current = y
      }
   })


   const toggle = () => setIsOpen(!isOpen)
   const close = () => isOpen && setIsOpen(false)


   useEffect(() => {
      isOpen ?
         document.body.style.overflow = "hidden" :
         document.body.style.overflow = "auto"
   }, [isOpen, setIsOpen])

   return (
      <motion.header
         animate={isHidden ? "hidden" : "visible"}
         transition={{ duration: "0.2" }}
         variants={{
            hidden: {
               y: "-100%"
            },
            visible: {
               y: "0%"
            }
         }}
         className='sticky top-0 left-0 w-full z-50'>
         <div className={`px-[20px] h-[65px] flex justify-between items-center
            ${isTransparent && !isOpen ? "bg-transparent" : "bg-white"} transition-all`}>
            <Logo close={close} />

            <AnimatePresence>
               {isOpen ? <HeaderMobileNav close={close} /> : null}
            </AnimatePresence>


            <HeaderBurger isOpen={isOpen} toggle={toggle} />
         </div>
      </motion.header>
   )
}

export default Header




{/* <div className={`px-[20px] h-[65px]
            md:h-[95px] md:px-[40px] md:flex md:items-center md:relative`}>
            <Logo />
            <Navigation />
            <HireBtn />
            <Social />
            <Language />
            <Menu toggle={toggle} isOpen={isOpen} />
         </div> */}