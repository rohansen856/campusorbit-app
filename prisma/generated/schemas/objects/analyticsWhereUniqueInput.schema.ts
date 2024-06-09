import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.analyticsWhereUniqueInput> = z
  .object({
    user_id: z.string().optional(),
  })
  .strict()

export const analyticsWhereUniqueInputObjectSchema = Schema
