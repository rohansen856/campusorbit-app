import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { analyticsCountOrderByAggregateInputObjectSchema } from "./analyticsCountOrderByAggregateInput.schema"
import { analyticsMaxOrderByAggregateInputObjectSchema } from "./analyticsMaxOrderByAggregateInput.schema"
import { analyticsMinOrderByAggregateInputObjectSchema } from "./analyticsMinOrderByAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.analyticsOrderByWithAggregationInput> = z
  .object({
    user_id: z.lazy(() => SortOrderSchema).optional(),
    device: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    fcm_token: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => analyticsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => analyticsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => analyticsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const analyticsOrderByWithAggregationInputObjectSchema = Schema
