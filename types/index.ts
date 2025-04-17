import { StaticImageData } from 'next/image';

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
};