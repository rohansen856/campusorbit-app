import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { clubsAvgOrderByAggregateInputObjectSchema } from "./clubsAvgOrderByAggregateInput.schema"
import { clubsCountOrderByAggregateInputObjectSchema } from "./clubsCountOrderByAggregateInput.schema"
import { clubsMaxOrderByAggregateInputObjectSchema } from "./clubsMaxOrderByAggregateInput.schema"
import { clubsMinOrderByAggregateInputObjectSchema } from "./clubsMinOrderByAggregateInput.schema"
import { clubsSumOrderByAggregateInputObjectSchema } from "./clubsSumOrderByAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.clubsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    field: z.lazy(() => SortOrderSchema).optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    coordinator: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    cocoordinator: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    members: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => clubsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => clubsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => clubsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => clubsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => clubsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const clubsOrderByWithAggregationInputObjectSchema = Schema
