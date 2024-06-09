import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ClubsAvgAggregateInputType> = z
  .object({
    members: z.literal(true).optional(),
  })
  .strict()

export const ClubsAvgAggregateInputObjectSchema = Schema
