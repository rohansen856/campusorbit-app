import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.coursesScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => coursesScalarWhereInputObjectSchema),
        z.lazy(() => coursesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => coursesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => coursesScalarWhereInputObjectSchema),
        z.lazy(() => coursesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    course_code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    course_title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    theory: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    lab: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    credits: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    semester: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    branch: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    drive_link: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const coursesScalarWhereInputObjectSchema = Schema
