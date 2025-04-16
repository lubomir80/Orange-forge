
import { ReactElement, SVGProps } from 'react';

type ServiceItem = {
   img: ReactElement<SVGProps<SVGSVGElement>>;
   title: string;
   des: string;
};

type CarouselItemProps = {
   item: ServiceItem
}


function CarouselItem({ item }: CarouselItemProps) {
   return (
      <div>
         <div>{item.img}</div>
         <h3 className='text-[27.15px] font-bold mb-5'>{item.title}</h3>
         <p className='max-w-[290px]'>
            {item.des}
         </p>
      </div>
   )
}

export default CarouselItem