"use client"

import { usePathname } from 'next/navigation';
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useRef, useState, useEffect } from 'react'
import Logo from './Logo'
import HeaderMobileBox from "./Header-mobile-box"
import HeaderNavigation from "./Header-navigation"
import HeaderHireBtn from "./Header-hire-btn"
import HeaderSocial from "./Header-social"
import HeaderLanguage from "./Header-language"
import Box from '../Box';



function Header() {
   const pathname = usePathname();
   const isProjectPage = pathname.includes("project")

   const [isHidden, setIsHidden] = useState(false)
   const [isTransparent, setIsTransparent] = useState(true)
   const [isOpen, setIsOpen] = useState(false)

   const lastYRef = useRef(0)
   const { scrollY } = useScroll()

   const headerVariants = {
      hidden: {
         y: "-100%"
      },
      visible: {
         y: "0%"
      }
   }


   useMotionValueEvent(scrollY, "change", (y) => {
      if (y < 50) {
         setIsTransparent(true)
      } else {
         setIsTransparent(false)
      }

      const difference = y - lastYRef.current
      if (Math.abs(difference) > 50) {
         setIsHidden(difference > 0)
         lastYRef.current = y
      }
   })


   const toggle = () => setIsOpen(!isOpen)
   const close = () => isOpen && setIsOpen(false)


   useEffect(() => {
      if (isOpen) document.body.style.overflow = "hidden"
      if (!isOpen) document.body.style.overflow = "auto"

   }, [isOpen, setIsOpen])


   return (
      <motion.header
         animate={isHidden ? "hidden" : "visible"}
         transition={{ duration: "0.2" }}
         variants={headerVariants}
         className='sticky top-0 left-0 w-full z-50'>
         <Box className={`h-[65px] lg:h-[95px] xl:h-[max(6vw,95px)]  flex justify-between items-center transition-all
            ${isTransparent && !isOpen ? "bg-transparent" : "bg-white"} 
            ${isProjectPage && isTransparent && !isOpen && "text-white"}`}>

            <Logo close={close} />

            <HeaderNavigation />
            <HeaderHireBtn className="hidden lg:block ml-auto" />
            <HeaderSocial className="hidden lg:flex ml-[1.2vw]" />
            <HeaderLanguage className="hidden lg:block ml-[3vw]" />

            <HeaderMobileBox isOpen={isOpen} close={close} toggle={toggle} />
         </Box>
      </motion.header>
   )
}

export default Header


