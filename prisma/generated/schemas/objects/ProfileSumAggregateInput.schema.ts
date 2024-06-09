import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ProfileSumAggregateInputType> = z
  .object({
    semester: z.literal(true).optional(),
    year: z.literal(true).optional(),
    mess: z.literal(true).optional(),
  })
  .strict()

export const ProfileSumAggregateInputObjectSchema = Schema
