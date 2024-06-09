import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.analyticsCreateManyInput> = z
  .object({
    user_id: z.string(),
    device: z.string().optional().nullable(),
    fcm_token: z.string().optional().nullable(),
  })
  .strict()

export const analyticsCreateManyInputObjectSchema = Schema
