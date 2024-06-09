import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { instituteCountOrderByAggregateInputObjectSchema } from "./instituteCountOrderByAggregateInput.schema"
import { instituteMaxOrderByAggregateInputObjectSchema } from "./instituteMaxOrderByAggregateInput.schema"
import { instituteMinOrderByAggregateInputObjectSchema } from "./instituteMinOrderByAggregateInput.schema"

const Schema: z.ZodType<Prisma.instituteOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    full_name: z.lazy(() => SortOrderSchema).optional(),
    domain: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => instituteCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => instituteMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => instituteMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const instituteOrderByWithAggregationInputObjectSchema = Schema
