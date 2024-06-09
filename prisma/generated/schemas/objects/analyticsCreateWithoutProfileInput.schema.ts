import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.analyticsCreateWithoutProfileInput> = z
  .object({
    device: z.string().optional().nullable(),
    fcm_token: z.string().optional().nullable(),
  })
  .strict()

export const analyticsCreateWithoutProfileInputObjectSchema = Schema
