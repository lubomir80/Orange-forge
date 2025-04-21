import { StaticImageData } from 'next/image';

type services = {
   number: number,
   symbol: string,
   des: string
}


export type ProjectListType = {
   name: string;
   title: string;
   desc: string;
   image: {
      main: StaticImageData;
      additional: StaticImageData[];
   };
   additionalInfo: string;
   paragraphs: string[];
   tags: string[];
   services: services[]
};