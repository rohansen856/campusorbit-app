import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { routineAvgOrderByAggregateInputObjectSchema } from "./routineAvgOrderByAggregateInput.schema"
import { routineCountOrderByAggregateInputObjectSchema } from "./routineCountOrderByAggregateInput.schema"
import { routineMaxOrderByAggregateInputObjectSchema } from "./routineMaxOrderByAggregateInput.schema"
import { routineMinOrderByAggregateInputObjectSchema } from "./routineMinOrderByAggregateInput.schema"
import { routineSumOrderByAggregateInputObjectSchema } from "./routineSumOrderByAggregateInput.schema"

const Schema: z.ZodType<Prisma.routineOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => routineCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => routineAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => routineMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => routineMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => routineSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const routineOrderByWithAggregationInputObjectSchema = Schema
