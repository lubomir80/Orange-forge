import Link from "next/link"


type HireProps = {
   className?: string,
   close?: () => void
}

function HeaderHireBtn({ className, close }: HireProps) {
   return (
      <div className={className}>
         <Link
            onClick={close}
            href="/#Hire-us"
            className="bg-orange-primary hover:bg-orange-secondary transition text-white capitalize font-bold px-[34px] py-[12px] md:px-[30px] rounded-full xl:text-[18.5px]">
            hire-us
         </Link>
      </div>
   )
}

export default HeaderHireBtn