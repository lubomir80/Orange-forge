import NumberBox from "../Number-box";


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


function AboutServiceTotal() {
   return (
      <>
         <NumberBox
            numbers={list}
            paragraphClass="font-bold"
            className="flex flex-wrap w-full" />
      </>
   )
}

export default AboutServiceTotal