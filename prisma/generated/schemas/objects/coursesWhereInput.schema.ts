import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { InstituteRelationFilterObjectSchema } from "./InstituteRelationFilter.schema"
import { instituteWhereInputObjectSchema } from "./instituteWhereInput.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { RoutineListRelationFilterObjectSchema } from "./RoutineListRelationFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UuidFilterObjectSchema } from "./UuidFilter.schema"

const Schema: z.ZodType<Prisma.coursesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => coursesWhereInputObjectSchema),
        z.lazy(() => coursesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => coursesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => coursesWhereInputObjectSchema),
        z.lazy(() => coursesWhereInputObjectSchema).array(),
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
    institute_courses_instituteToinstitute: z
      .union([
        z.lazy(() => InstituteRelationFilterObjectSchema),
        z.lazy(() => instituteWhereInputObjectSchema),
      ])
      .optional(),
    routine: z.lazy(() => RoutineListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const coursesWhereInputObjectSchema = Schema
