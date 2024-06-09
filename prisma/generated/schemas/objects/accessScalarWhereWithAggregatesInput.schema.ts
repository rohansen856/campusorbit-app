import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.accessScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => accessScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => accessScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => accessScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => accessScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => accessScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    level: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    details: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    domain: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const accessScalarWhereWithAggregatesInputObjectSchema = Schema
