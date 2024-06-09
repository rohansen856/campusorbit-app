import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { UuidWithAggregatesFilterObjectSchema } from "./UuidWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.instituteScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => instituteScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => instituteScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => instituteScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => instituteScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => instituteScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    full_name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    domain: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const instituteScalarWhereWithAggregatesInputObjectSchema = Schema
