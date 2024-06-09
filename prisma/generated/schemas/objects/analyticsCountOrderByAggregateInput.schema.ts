import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.analyticsCountOrderByAggregateInput> = z
  .object({
    user_id: z.lazy(() => SortOrderSchema).optional(),
    device: z.lazy(() => SortOrderSchema).optional(),
    fcm_token: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const analyticsCountOrderByAggregateInputObjectSchema = Schema
