import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { instituteOrderByWithRelationInputObjectSchema } from "./instituteOrderByWithRelationInput.schema"
import { routineOrderByRelationAggregateInputObjectSchema } from "./routineOrderByRelationAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.coursesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    course_code: z.lazy(() => SortOrderSchema).optional(),
    course_title: z.lazy(() => SortOrderSchema).optional(),
    theory: z.lazy(() => SortOrderSchema).optional(),
    lab: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    credits: z.lazy(() => SortOrderSchema).optional(),
    semester: z.lazy(() => SortOrderSchema).optional(),
    branch: z.lazy(() => SortOrderSchema).optional(),
    drive_link: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    institute_courses_instituteToinstitute: z
      .lazy(() => instituteOrderByWithRelationInputObjectSchema)
      .optional(),
    routine: z
      .lazy(() => routineOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const coursesOrderByWithRelationInputObjectSchema = Schema
