"use client";


import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import HomeHeading from "@/components/Heading/Home-heading";

import Map from "@/components/Map/Map";
import Works from "@/components/Works/Works";



export default function Home() {
   return (
      <>
         <HomeHeading />
         <About />
         <Works />
         <Contact />
         <Map />
      </ >
   );
}
