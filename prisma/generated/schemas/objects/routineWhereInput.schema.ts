import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { CoursesRelationFilterObjectSchema } from "./CoursesRelationFilter.schema"
import { coursesWhereInputObjectSchema } from "./coursesWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { InstituteRelationFilterObjectSchema } from "./InstituteRelationFilter.schema"
import { instituteWhereInputObjectSchema } from "./instituteWhereInput.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { Routine_changesListRelationFilterObjectSchema } from "./Routine_changesListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.routineWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => routineWhereInputObjectSchema),
        z.lazy(() => routineWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => routineWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => routineWhereInputObjectSchema),
        z.lazy(() => routineWhereInputObjectSchema).array(),
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
    courses: z
      .union([
        z.lazy(() => CoursesRelationFilterObjectSchema),
        z.lazy(() => coursesWhereInputObjectSchema),
      ])
      .optional(),
    institute_routine_instituteToinstitute: z
      .union([
        z.lazy(() => InstituteRelationFilterObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema),
      ])
      .optional(),
    routine_changes: z
      .lazy(() => Routine_changesListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export const routineWhereInputObjectSchema = Schema
