import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.messCreateManyInput> = z
  .object({
    id: z.string().optional(),
    mess_no: z.number(),
    day: z.number(),
    breakfast: z.string(),
    lunch: z.string(),
    dinner: z.string(),
    institute: z.string(),
  })
  .strict()

export const messCreateManyInputObjectSchema = Schema
