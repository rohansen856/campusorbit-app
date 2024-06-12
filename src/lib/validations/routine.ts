import * as z from "zod"

export const routineModificationSchema = z.object({
  routineId: z.string(),
  modification: z.enum(["cancelled", "rescheduled"]),
})
