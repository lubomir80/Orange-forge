import * as z from "zod"


export const ContactSchema = z.object({
   email: z.string().email({
      message: "Email is required"
   })
})
export type TContactSchema = z.infer<typeof ContactSchema>