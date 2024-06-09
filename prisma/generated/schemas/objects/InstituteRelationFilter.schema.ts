import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteWhereInputObjectSchema } from "./instituteWhereInput.schema"

const Schema: z.ZodType<Prisma.InstituteRelationFilter> = z
  .object({
    is: z
      .lazy(() => instituteWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => instituteWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const InstituteRelationFilterObjectSchema = Schema
