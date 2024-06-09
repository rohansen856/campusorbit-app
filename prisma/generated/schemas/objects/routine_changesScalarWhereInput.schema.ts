import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.routine_changesScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => routine_changesScalarWhereInputObjectSchema),
        z.lazy(() => routine_changesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => routine_changesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => routine_changesScalarWhereInputObjectSchema),
        z.lazy(() => routine_changesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    created_by: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    routine_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const routine_changesScalarWhereInputObjectSchema = Schema
