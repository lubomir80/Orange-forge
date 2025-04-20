import Link from "next/link"


function HireBtn({ className }: { className?: string }) {
   return (
      <div className={className}>
         <Link
            href="/#hire-us"
            className="bg-orange-primary hover:bg-orange-secondary transition text-white capitalize font-bold px-[34px] py-[12px] md:px-[30px] rounded-full">
            hire-us
         </Link>
      </div>
   )
}

export default HireBtn