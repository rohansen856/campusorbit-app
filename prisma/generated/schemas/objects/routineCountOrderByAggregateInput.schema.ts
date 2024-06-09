import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.routineCountOrderByAggregateInput> = z
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
  })
  .strict()

export const routineCountOrderByAggregateInputObjectSchema = Schema
