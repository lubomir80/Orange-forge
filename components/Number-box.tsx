type NumberItem = {
   number: number;
   symbol: string;
   des: string;
};

type NumberBoxProps = {
   numbers: NumberItem[],
   className?: string,
   paragraphClass?: string
}

function NumberBox({ numbers, className, paragraphClass }: NumberBoxProps) {
   return (
      <div className={className}>
         {numbers.map((item, index) =>
            <div key={index + item.number}
               className="mb-[50px] w-[50%] lg:w-[25%] bg-transparent border-none shadow-nones">
               <h2 className="text-[35px] font-bold lg:text-[67.7px]">
                  {item.number}
                  <span>{item.symbol}</span>
               </h2>
               <p className={`${paragraphClass} max-w-[220px]`}>
                  {item.des}
               </p>
            </div>
         )}
      </div>
   )
}

export default NumberBox