type StatItem = {
   number: number;
   symbol: string;
   des: string;
};

type StatItemProps = {
   item: StatItem
};



function ServiceTotalItem({ item }: StatItemProps) {
   return (
      <div className="mb-[50px] w-[50%] lg:w-[25%] bg-transparent border-none shadow-nones">
         <h2 className="text-[35px] font-bold lg:text-[67.7px]">{item.number}<span>{item.symbol}</span></h2>
         <p className="font-bold max-w-[220px]">{item.des}</p>
      </div>
   )
}

export default ServiceTotalItem