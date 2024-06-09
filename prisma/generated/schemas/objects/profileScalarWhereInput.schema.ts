import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BigIntFilterObjectSchema } from "./BigIntFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { IntNullableFilterObjectSchema } from "./IntNullableFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.profileScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => profileScalarWhereInputObjectSchema),
        z.lazy(() => profileScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => profileScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => profileScalarWhereInputObjectSchema),
        z.lazy(() => profileScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    username: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    full_name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    semester: z
      .union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()])
      .optional(),
    branch: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    group: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    programme: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    year: z
      .union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()])
      .optional(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    visibility: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    mess: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    electives: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict()

export const profileScalarWhereInputObjectSchema = Schema
