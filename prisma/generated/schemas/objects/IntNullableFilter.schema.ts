import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema"

const Schema: z.ZodType<Prisma.IntNullableFilter> = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.union([z.number().array(), z.number()]).optional().nullable(),
    notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const IntNullableFilterObjectSchema = Schema
