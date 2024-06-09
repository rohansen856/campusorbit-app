import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { routine_changesCountOrderByAggregateInputObjectSchema } from "./routine_changesCountOrderByAggregateInput.schema"
import { routine_changesMaxOrderByAggregateInputObjectSchema } from "./routine_changesMaxOrderByAggregateInput.schema"
import { routine_changesMinOrderByAggregateInputObjectSchema } from "./routine_changesMinOrderByAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.routine_changesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    created_by: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    routine_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => routine_changesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => routine_changesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => routine_changesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const routine_changesOrderByWithAggregationInputObjectSchema = Schema
