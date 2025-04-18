import * as z from "zod"


export const ContactSchema = z.object({
   email: z.string().email({
      message: "Email is required"
   })
})
export type TContactSchema = z.infer<typeof ContactSchema>



export const FooterSchema = z.object({
   name: z.string().min(2, "Name is too short"),
   email: z.string().email("Invalid email address"),
   phone: z.string().min(7, "Phone number too short"),
   message: z.string().min(10, "Message should be at least 10 characters"),
})
export type TFooterSchema = z.infer<typeof FooterSchema>