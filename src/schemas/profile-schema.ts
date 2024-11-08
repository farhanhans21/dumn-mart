import {z} from 'zod'

export const UpdateProfileSchema = z.object({
firstName: z.string().optional(),
		lastName: z.string().optional(),
		address: z.string().optional(),
		phone: z.string().optional(),
		gender:z.string().optional(),
		image:z.instanceof(FileList).optional(),
})

export type UpdateProfileSchema = z.infer<typeof UpdateProfileSchema>