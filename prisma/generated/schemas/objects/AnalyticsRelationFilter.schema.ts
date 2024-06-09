import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { analyticsWhereInputObjectSchema } from "./analyticsWhereInput.schema"

const Schema: z.ZodType<Prisma.AnalyticsRelationFilter> = z
  .object({
    is: z
      .lazy(() => analyticsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => analyticsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AnalyticsRelationFilterObjectSchema = Schema
