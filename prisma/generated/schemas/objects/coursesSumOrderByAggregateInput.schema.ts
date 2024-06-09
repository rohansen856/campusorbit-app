import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"

const Schema: z.ZodType<Prisma.coursesSumOrderByAggregateInput> = z
  .object({
    credits: z.lazy(() => SortOrderSchema).optional(),
    semester: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const coursesSumOrderByAggregateInputObjectSchema = Schema
