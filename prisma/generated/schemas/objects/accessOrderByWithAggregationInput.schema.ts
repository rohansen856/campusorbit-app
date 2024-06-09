import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { accessAvgOrderByAggregateInputObjectSchema } from "./accessAvgOrderByAggregateInput.schema"
import { accessCountOrderByAggregateInputObjectSchema } from "./accessCountOrderByAggregateInput.schema"
import { accessMaxOrderByAggregateInputObjectSchema } from "./accessMaxOrderByAggregateInput.schema"
import { accessMinOrderByAggregateInputObjectSchema } from "./accessMinOrderByAggregateInput.schema"
import { accessSumOrderByAggregateInputObjectSchema } from "./accessSumOrderByAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.accessOrderByWithAggregationInput> = z
  .object({
    level: z.lazy(() => SortOrderSchema).optional(),
    details: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    domain: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => accessCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => accessAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => accessMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => accessMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => accessSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const accessOrderByWithAggregationInputObjectSchema = Schema
