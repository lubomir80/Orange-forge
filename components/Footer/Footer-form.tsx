"use client"

import { FooterSchema, TFooterSchema } from '@/schemas'
import { zodResolver } from "@hookform/resolvers/zod"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'

function FooterForm() {

   const form = useForm<TFooterSchema>({
      resolver: zodResolver(FooterSchema),
      defaultValues: {
         name: "",
         email: "",
         phone: "",
         message: "",
      }
   })

   const onSubmit = (email: TFooterSchema) => {
      console.log(email);
   }


   return (
      <div className='flex-1'>
         <h3 className="text-[24px] text-white mb-[15px]">Is the answer to your question missing? Get in touch with us.</h3>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
               className='space-y-10'>
               <div className='w-full relative space-y-10'>
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem className="relative">
                           <FormControl>
                              <Input
                                 className='border-white/45 border-b'
                                 placeholder='Name'
                                 {...field}
                                 type="text"
                                 id="name" />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <div className='space-y-10 sm:space-y-0 sm:flex sm:gap-5 w-full '>
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem className="relative sm:w-[50%]">
                              <FormControl>
                                 <Input
                                    className='border-white/45 border-b'
                                    placeholder='Your Email'
                                    {...field}
                                    type="email"
                                    id="email" />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                           <FormItem className="relative sm:w-[50%]">
                              <FormControl>
                                 <Input
                                    className='border-white/45 border-b '
                                    placeholder='Phone'
                                    {...field}
                                    type="phone"
                                    id="phone" />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>
                  <FormField
                     control={form.control}
                     name="message"
                     render={({ field }) => (
                        <FormItem className="relative">
                           <FormControl>
                              <Input
                                 className='border-white/45 border-b'
                                 placeholder='Message'
                                 {...field}
                                 type="text"
                                 id="message" />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>
               <Button className='rounded-full'>Hire Us</Button>
            </form>
         </Form>
      </div>
   )
}

export default FooterForm