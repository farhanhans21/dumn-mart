import { z } from "zod";

export const ProductSchema = z.object({
  nameProduct: z.string(),
  desc: z.string(),
  price: z.number(),
  stock: z.number(),
  categoryId: z.number(),
  image: z.instanceof(FileList).optional(),
});
export type ProductSchema = z.infer<typeof ProductSchema>;
