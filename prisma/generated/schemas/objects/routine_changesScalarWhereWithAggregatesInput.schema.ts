import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { UuidWithAggregatesFilterObjectSchema } from "./UuidWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.routine_changesScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => routine_changesScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => routine_changesScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => routine_changesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => routine_changesScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => routine_changesScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      created_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      created_by: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
      date: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
      description: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      routine_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
        .optional(),
    })
    .strict()

export const routine_changesScalarWhereWithAggregatesInputObjectSchema = Schema
