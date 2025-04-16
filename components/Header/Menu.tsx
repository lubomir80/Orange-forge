

type MenuProps = {
   isOpen: boolean,
   toggle: () => void
}


function Menu({ isOpen, toggle }: MenuProps) {
   return (
      <>
         <button
            onClick={toggle}
            className="absolute md:hidden flex items-center gap-2 text-orange-primary cursor-pointer">
            Menu
            {isOpen ? "X" : "="}
         </button>
         <div>

         </div>
      </>
   )
}

export default Menu