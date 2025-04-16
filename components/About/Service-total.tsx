import ServiceTotalItem from "./Service-total-item"

type ListItem = {
   number: number;
   symbol: string;
   des: string;
};


const list: ListItem[] = [
   { number: 15, symbol: "+", des: "years of expertise" },
   { number: 50, symbol: "+", des: "projects delivered" },
   { number: 15, symbol: "%", des: "clients who returned to us for additional services" },
   { number: 500, symbol: "+", des: "thousands of satisfied users of our products" },
];


function ServiceTotal() {

   return (
      <div className="flex flex-wrap w-full">
         {list.map((item) =>
            <ServiceTotalItem key={item.des} item={item} />)}
      </div>
   )
}

export default ServiceTotal