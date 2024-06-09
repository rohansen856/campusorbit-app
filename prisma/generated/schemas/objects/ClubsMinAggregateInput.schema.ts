import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ClubsMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    type: z.literal(true).optional(),
    field: z.literal(true).optional(),
    image: z.literal(true).optional(),
    coordinator: z.literal(true).optional(),
    cocoordinator: z.literal(true).optional(),
    institute: z.literal(true).optional(),
    members: z.literal(true).optional(),
  })
  .strict()

export const ClubsMinAggregateInputObjectSchema = Schema
