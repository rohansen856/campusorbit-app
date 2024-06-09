import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.messAvgOrderByAggregateInput> = z
  .object({
    mess_no: z.lazy(() => SortOrderSchema).optional(),
    day: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const messAvgOrderByAggregateInputObjectSchema = Schema
