import Box from '@/components/Box'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NotFound() {
   return (
      <div className='h-[calc(100dvh-65px)]
      lg:h-[calc(100dvh-95px)] xl:h-[calc(100dvg-max(6vw,95px))]'>
         <Box className='flex flex-col items-start justify-center gap-10 min-h-[500px]'>
            <h1 className='text-[32px] lg:text-[64px]'>
               Sorry, this page doesn&apos;t exist
            </h1>
            <p className='text-xl'>
               Please check the URL or go back a homepage.
            </p>
            <Button asChild variant="circle" size="circle">
               <Link href="/">
                  Homepage
               </Link>
            </Button>
         </Box>
      </div>
   )
}

export default NotFound