import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messWhereInputObjectSchema } from "./messWhereInput.schema"

const Schema: z.ZodType<Prisma.MessListRelationFilter> = z
  .object({
    every: z.lazy(() => messWhereInputObjectSchema).optional(),
    some: z.lazy(() => messWhereInputObjectSchema).optional(),
    none: z.lazy(() => messWhereInputObjectSchema).optional(),
  })
  .strict()

export const MessListRelationFilterObjectSchema = Schema
