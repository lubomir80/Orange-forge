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




function PartnerForm() {

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
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem className="relative">
                     <FormControl>
                        <Input
                           className=""
                           placeholder="Your email"
                           {...field}
                           type="email" />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button variant="circle" size="circle">Submit</Button>
         </form>
      </Form>
   )
}

export default PartnerForm