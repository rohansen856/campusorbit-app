import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.profileAvgOrderByAggregateInput> = z
  .object({
    semester: z.lazy(() => SortOrderSchema).optional(),
    year: z.lazy(() => SortOrderSchema).optional(),
    mess: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const profileAvgOrderByAggregateInputObjectSchema = Schema
