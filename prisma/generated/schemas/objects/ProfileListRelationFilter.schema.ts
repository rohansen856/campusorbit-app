import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileWhereInputObjectSchema } from "./profileWhereInput.schema"

const Schema: z.ZodType<Prisma.ProfileListRelationFilter> = z
  .object({
    every: z.lazy(() => profileWhereInputObjectSchema).optional(),
    some: z.lazy(() => profileWhereInputObjectSchema).optional(),
    none: z.lazy(() => profileWhereInputObjectSchema).optional(),
  })
  .strict()

export const ProfileListRelationFilterObjectSchema = Schema
