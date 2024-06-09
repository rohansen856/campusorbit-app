import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessWhereInputObjectSchema } from "./accessWhereInput.schema"

const Schema: z.ZodType<Prisma.AccessRelationFilter> = z
  .object({
    is: z
      .lazy(() => accessWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => accessWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AccessRelationFilterObjectSchema = Schema
