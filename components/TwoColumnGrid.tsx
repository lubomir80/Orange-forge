

type TwoColumnGridProps = {
   children: React.ReactNode,
   className?: string
}


function TwoColumnGrid({ children, className }: TwoColumnGridProps) {
   return (
      <div
         className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-0 ${className}`}>
         {children}
      </div>
   )
}

export default TwoColumnGrid