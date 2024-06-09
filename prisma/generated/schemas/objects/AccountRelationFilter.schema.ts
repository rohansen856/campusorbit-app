import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountWhereInputObjectSchema } from "./accountWhereInput.schema"

const Schema: z.ZodType<Prisma.AccountRelationFilter> = z
  .object({
    is: z
      .lazy(() => accountWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => accountWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AccountRelationFilterObjectSchema = Schema
