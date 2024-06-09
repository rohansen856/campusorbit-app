import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { coursesAvgOrderByAggregateInputObjectSchema } from "./coursesAvgOrderByAggregateInput.schema"
import { coursesCountOrderByAggregateInputObjectSchema } from "./coursesCountOrderByAggregateInput.schema"
import { coursesMaxOrderByAggregateInputObjectSchema } from "./coursesMaxOrderByAggregateInput.schema"
import { coursesMinOrderByAggregateInputObjectSchema } from "./coursesMinOrderByAggregateInput.schema"
import { coursesSumOrderByAggregateInputObjectSchema } from "./coursesSumOrderByAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.coursesOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => coursesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => coursesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => coursesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => coursesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => coursesSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const coursesOrderByWithAggregationInputObjectSchema = Schema
