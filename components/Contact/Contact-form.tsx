"use client"

import { ContactSchema, TContactSchema } from '@/schemas'
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




function ContactForm() {

   const form = useForm<TContactSchema>({
      resolver: zodResolver(ContactSchema),
      defaultValues: {
         email: ""
      }
   })

   const onSubmit = (email: TContactSchema) => {
      console.log(email);
   }



   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}
            className=' flex flex-col gap-10 items-center max-w-[480px] md:flex-row'>
            <div className='w-full relative'>
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className="relative">
                        <FormControl>
                           <Input
                              placeholder='Your Email'

                              {...field}
                              type="email"
                              id="email" />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
            <Button variant="circle" size="circle">Submit</Button>
         </form>
      </Form>
   )
}

export default ContactForm