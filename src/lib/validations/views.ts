import * as z from "zod"

export const viewsSchema = z.object({
  route: z.string(),
  email: z.string(),
  device: z.string().optional(),
})
