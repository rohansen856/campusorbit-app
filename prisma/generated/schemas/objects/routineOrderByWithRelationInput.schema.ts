import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { coursesOrderByWithRelationInputObjectSchema } from "./coursesOrderByWithRelationInput.schema"
import { instituteOrderByWithRelationInputObjectSchema } from "./instituteOrderByWithRelationInput.schema"
import { routine_changesOrderByRelationAggregateInputObjectSchema } from "./routine_changesOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<Prisma.routineOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    course_id: z.lazy(() => SortOrderSchema).optional(),
    course_code: z.lazy(() => SortOrderSchema).optional(),
    course_title: z.lazy(() => SortOrderSchema).optional(),
    prof: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    day: z.lazy(() => SortOrderSchema).optional(),
    from: z.lazy(() => SortOrderSchema).optional(),
    to: z.lazy(() => SortOrderSchema).optional(),
    group: z.lazy(() => SortOrderSchema).optional(),
    branch: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    room: z.lazy(() => SortOrderSchema).optional(),
    semester: z.lazy(() => SortOrderSchema).optional(),
    compulsory: z.lazy(() => SortOrderSchema).optional(),
    courses: z
      .lazy(() => coursesOrderByWithRelationInputObjectSchema)
      .optional(),
    institute_routine_instituteToinstitute: z
      .lazy(() => instituteOrderByWithRelationInputObjectSchema)
      .optional(),
    routine_changes: z
      .lazy(() => routine_changesOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const routineOrderByWithRelationInputObjectSchema = Schema
