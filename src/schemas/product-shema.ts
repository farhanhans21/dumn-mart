import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  nameProduct: z.string(),
  desc: z.string(),
  price: z.number(),
  stock: z.number(),
  categoryId: z.number(),
  image: z.instanceof(FileList).optional(),
});

export const UpdateProductSchema =  ProductSchema.omit({categoryId:true})

export type UpdateProductSchema = z.infer<typeof UpdateProductSchema>;
export type ProductSchema = z.infer<typeof ProductSchema>;
