const list = [
   { title: "eCommerce" },
   { title: "Bots Software" },
   { title: "CRM systems" },
   { title: "UI/UX Design" },
   { title: "Mobile Software" },
   { title: "Dedicated teams" },
];


function HeadingComponent() {
   return (
      <div className="lg:flex lg:items-center lg:gap-[5.6vw] mb-[max(15.4166666667vw,_100px)]">
         <p className="bg-grey max-w-[500px] px-[25px] pt-[15px] pb-[20px] rounded-2xl mb-[25px] lg:mb-[0]">👉 Your digital success is our main destination. For years, Desite Software helps companies across the globe build new digital products, improve existing, and innovate within their business domain.
         </p>
         <div className="max-w-[540px]">
            <ul className="flex flex-wrap space-y-[22px]">
               {list.map(({ title }) =>
                  <li key={title} className="w-[50%] lg:w-[33.333%]">{title}</li>)}
            </ul>
         </div>
      </div>
   )
}

export default HeadingComponent