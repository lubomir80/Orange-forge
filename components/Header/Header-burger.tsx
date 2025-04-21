
import { motion } from "motion/react"


type BurgerProps = {
   isOpen: boolean;
   toggle: () => void;
};

function HeaderBurger({ isOpen, toggle }: BurgerProps) {

   return (
      < motion.button
         onClick={toggle}
         whileHover={{ color: "#fe5616" }}
         transition={{ type: "spring" }}
         className="flex items-center justify-center gap-1 cursor-pointer z-100 ">
         Menu
         <div className="w-5 h-5 flex items-center justify-center">
            <span className={`${isOpen ? "opened" : ""} burger-icon`} />
         </div>
      </motion.button >
   )
}

export default HeaderBurger