import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { accountAvgOrderByAggregateInputObjectSchema } from "./accountAvgOrderByAggregateInput.schema"
import { accountCountOrderByAggregateInputObjectSchema } from "./accountCountOrderByAggregateInput.schema"
import { accountMaxOrderByAggregateInputObjectSchema } from "./accountMaxOrderByAggregateInput.schema"
import { accountMinOrderByAggregateInputObjectSchema } from "./accountMinOrderByAggregateInput.schema"
import { accountSumOrderByAggregateInputObjectSchema } from "./accountSumOrderByAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.accountOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    access_level: z.lazy(() => SortOrderSchema).optional(),
    password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => accountCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => accountAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => accountMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => accountMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => accountSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const accountOrderByWithAggregationInputObjectSchema = Schema
