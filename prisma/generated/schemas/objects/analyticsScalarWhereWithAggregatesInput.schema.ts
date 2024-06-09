import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { UuidWithAggregatesFilterObjectSchema } from "./UuidWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.analyticsScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => analyticsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => analyticsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => analyticsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => analyticsScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => analyticsScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    device: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    fcm_token: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const analyticsScalarWhereWithAggregatesInputObjectSchema = Schema
