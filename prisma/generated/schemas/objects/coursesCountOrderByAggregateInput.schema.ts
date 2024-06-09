import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.coursesCountOrderByAggregateInput> = z
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
    drive_link: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const coursesCountOrderByAggregateInputObjectSchema = Schema
