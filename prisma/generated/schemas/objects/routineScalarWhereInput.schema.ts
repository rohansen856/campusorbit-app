import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.routineScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => routineScalarWhereInputObjectSchema),
        z.lazy(() => routineScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => routineScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => routineScalarWhereInputObjectSchema),
        z.lazy(() => routineScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    course_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    course_code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    course_title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    prof: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    day: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    from: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    to: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    group: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    branch: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    institute: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    room: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    semester: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    compulsory: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
  })
  .strict()

export const routineScalarWhereInputObjectSchema = Schema
