import {z} from "zod"

export const CategorySchema = z.object({
  name: z.string()
})

export type CategorySchema = z.infer<typeof CategorySchema>