import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountWhereInputObjectSchema } from "./accountWhereInput.schema"

const Schema: z.ZodType<Prisma.AccountListRelationFilter> = z
  .object({
    every: z.lazy(() => accountWhereInputObjectSchema).optional(),
    some: z.lazy(() => accountWhereInputObjectSchema).optional(),
    none: z.lazy(() => accountWhereInputObjectSchema).optional(),
  })
  .strict()

export const AccountListRelationFilterObjectSchema = Schema
