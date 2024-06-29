import * as z from "zod"

export const clubJoinSchema = z.object({
  clubId: z.string().uuid(),
})
