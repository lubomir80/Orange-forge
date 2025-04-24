type BoxProps = {
   className?: string,
   children: React.ReactNode
}

function Box({ className, children }: BoxProps) {
   return (
      <div className={`px-[20px] sm:px-[40px] lg:px-[3.472vw] ${className}`}>
         {children}
      </div>
   )
}

export default Box