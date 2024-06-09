import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileWhereInputObjectSchema } from "./profileWhereInput.schema"

const Schema: z.ZodType<Prisma.ProfileRelationFilter> = z
  .object({
    is: z
      .lazy(() => profileWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => profileWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const ProfileRelationFilterObjectSchema = Schema
