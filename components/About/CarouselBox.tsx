"use client"

import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselItem from './CarouselItem';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ComponentType, ReactElement, SVGProps } from 'react';
import Image from 'next/image';
import Doc from './Icons/Doc';
import World from './Icons/World';
import Phone from './Icons/Phone';
import Pencil from './Icons/Pencil';
import Monitor from './Icons/Monitor';


type SvgImageProps = {
   src: string;
   height: number;
   width: number;
   blurWidth: number;
   blurHeight: number;
};


type ServiceItem = {
   img: ReactElement<SVGProps<SVGSVGElement>>;
   title: string;
   des: string;
};

const carouselItems: ServiceItem[] = [
   { img: <Monitor size='100' color='#F5F5F5' />, title: "Custom Software", des: "Our team works on developing high-quality custom software solutions aimed at fulfilling unique client needs. We strive for optimizing work processes to boost productivity." },
   { img: <Phone size='100' color='#F5F5F5' />, title: "Mobile Apps", des: "We specialize in creating mobile apps notable for excellent design and user-friendliness. Our aim is to develop apps that connect people and enhance their experience." },
   { img: <Doc size='100' color='#F5F5F5' />, title: "API", des: "We create reliable and efficient APIs that allow smooth interaction between different systems. Harness the power of API to boost your business efficiency." },
   { img: <Pencil size='100' color='#F5F5F5' />, title: "UI/UX", des: "We create interfaces that offer a superior user experience. Our designs make your product appealing and easy to use." },
   { img: <World size='100' color='#F5F5F5' />, title: "Marketing & SEO", des: "Our integrated approach to marketing and SEO helps improve brand visibility and attract more potential clients. We work on making your brand easily discoverable in the digital world." },
]




function CarouselBox() {



   return (
      <>
         <div className='relative my-[40px] h-[450px]'>
            <Swiper
               breakpoints={{
                  576: { slidesPerView: 1.2 },
                  768: { slidesPerView: 2.2 },
                  992: { slidesPerView: 2.5 },
                  1200: { slidesPerView: 3.5 }
               }}
               scrollbar={{ hide: false }}
               slidesPerView={1.1}
               spaceBetween={18}
               modules={[Scrollbar]}
            >
               {carouselItems.map((item) =>
                  <SwiperSlide>
                     <CarouselItem item={item} />
                  </SwiperSlide>)}
            </Swiper>
         </div>
      </>
   )
}

export default CarouselBox