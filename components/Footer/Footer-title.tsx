
type FooterTitleProps = {
   children: React.ReactNode,
   className?: string
}


function FooterTitle({ children, className }: FooterTitleProps) {
   return (
      <h3 className={`text-[24px] mb-[10px] lg:text-[max(24px,_1.666666vw)] ${className}`}>
         {children}
      </h3>
   )
}

export default FooterTitle