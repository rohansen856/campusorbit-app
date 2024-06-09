import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.messMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    mess_no: z.lazy(() => SortOrderSchema).optional(),
    day: z.lazy(() => SortOrderSchema).optional(),
    breakfast: z.lazy(() => SortOrderSchema).optional(),
    lunch: z.lazy(() => SortOrderSchema).optional(),
    dinner: z.lazy(() => SortOrderSchema).optional(),
    institute: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const messMinOrderByAggregateInputObjectSchema = Schema
