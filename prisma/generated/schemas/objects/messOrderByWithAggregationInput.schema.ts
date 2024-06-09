import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { messAvgOrderByAggregateInputObjectSchema } from "./messAvgOrderByAggregateInput.schema"
import { messCountOrderByAggregateInputObjectSchema } from "./messCountOrderByAggregateInput.schema"
import { messMaxOrderByAggregateInputObjectSchema } from "./messMaxOrderByAggregateInput.schema"
import { messMinOrderByAggregateInputObjectSchema } from "./messMinOrderByAggregateInput.schema"
import { messSumOrderByAggregateInputObjectSchema } from "./messSumOrderByAggregateInput.schema"

const Schema: z.ZodType<Prisma.messOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    mess_no: z.lazy(() => SortOrderSchema).optional(),
    day: z.lazy(() => SortOrderSchema).optional(),
    breakfast: z.lazy(() => SortOrderSchema).optional(),
    lunch: z.lazy(() => SortOrderSchema).optional(),
    dinner: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => messCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => messAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => messMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => messMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => messSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const messOrderByWithAggregationInputObjectSchema = Schema
