import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ProfileMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    username: z.literal(true).optional(),
    full_name: z.literal(true).optional(),
    image: z.literal(true).optional(),
    semester: z.literal(true).optional(),
    branch: z.literal(true).optional(),
    group: z.literal(true).optional(),
    programme: z.literal(true).optional(),
    year: z.literal(true).optional(),
    institute: z.literal(true).optional(),
    visibility: z.literal(true).optional(),
    mess: z.literal(true).optional(),
  })
  .strict()

export const ProfileMaxAggregateInputObjectSchema = Schema
