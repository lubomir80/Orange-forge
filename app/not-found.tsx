import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NotFound() {
   return (
      <div className='px-[20px] lg:px-[40px] h-[calc(100dvh-65px)]
      lg:h-[calc(100dvh-95px)] xl:h-[calc(100dvg-max(6vw,95px))]
      flex flex-col items-start justify-center gap-10 min-h-[500px]'>
         <h1 className='text-[32px] lg:text-[64px]'>
            Sorry, this page doesn't exist
         </h1>
         <p className='uppercase'>
            Please check the URL or go back a homepage.
         </p>
         <Button asChild variant="circle" size="circle">
            <Link href="/">
               Homepage
            </Link>
         </Button>
      </div>
   )
}

export default NotFound