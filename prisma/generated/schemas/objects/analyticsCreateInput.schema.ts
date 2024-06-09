import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateNestedOneWithoutAnalyticsInputObjectSchema } from "./profileCreateNestedOneWithoutAnalyticsInput.schema"

const Schema: z.ZodType<Prisma.analyticsCreateInput> = z
  .object({
    device: z.string().optional().nullable(),
    fcm_token: z.string().optional().nullable(),
    profile: z.lazy(
      () => profileCreateNestedOneWithoutAnalyticsInputObjectSchema
    ),
  })
  .strict()

export const analyticsCreateInputObjectSchema = Schema
