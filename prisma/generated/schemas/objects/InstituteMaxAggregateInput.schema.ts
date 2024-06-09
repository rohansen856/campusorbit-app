import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.InstituteMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    full_name: z.literal(true).optional(),
    domain: z.literal(true).optional(),
  })
  .strict()

export const InstituteMaxAggregateInputObjectSchema = Schema
