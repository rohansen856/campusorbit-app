import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.accountScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => accountScalarWhereInputObjectSchema),
        z.lazy(() => accountScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => accountScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => accountScalarWhereInputObjectSchema),
        z.lazy(() => accountScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    access_level: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const accountScalarWhereInputObjectSchema = Schema
