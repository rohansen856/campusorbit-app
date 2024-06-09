import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { profileAvgOrderByAggregateInputObjectSchema } from "./profileAvgOrderByAggregateInput.schema"
import { profileCountOrderByAggregateInputObjectSchema } from "./profileCountOrderByAggregateInput.schema"
import { profileMaxOrderByAggregateInputObjectSchema } from "./profileMaxOrderByAggregateInput.schema"
import { profileMinOrderByAggregateInputObjectSchema } from "./profileMinOrderByAggregateInput.schema"
import { profileSumOrderByAggregateInputObjectSchema } from "./profileSumOrderByAggregateInput.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"

const Schema: z.ZodType<Prisma.profileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    username: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    full_name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    image: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    semester: z.lazy(() => SortOrderSchema).optional(),
    branch: z.lazy(() => SortOrderSchema).optional(),
    group: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    programme: z.lazy(() => SortOrderSchema).optional(),
    year: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
    visibility: z.lazy(() => SortOrderSchema).optional(),
    mess: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    electives: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => profileCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => profileAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => profileMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => profileMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => profileSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const profileOrderByWithAggregationInputObjectSchema = Schema
