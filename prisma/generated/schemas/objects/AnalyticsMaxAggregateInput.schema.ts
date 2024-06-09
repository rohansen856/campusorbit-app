import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.AnalyticsMaxAggregateInputType> = z
  .object({
    user_id: z.literal(true).optional(),
    device: z.literal(true).optional(),
    fcm_token: z.literal(true).optional(),
  })
  .strict()

export const AnalyticsMaxAggregateInputObjectSchema = Schema
