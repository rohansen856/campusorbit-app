import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesWhereInputObjectSchema } from "./coursesWhereInput.schema"

const Schema: z.ZodType<Prisma.CoursesListRelationFilter> = z
  .object({
    every: z.lazy(() => coursesWhereInputObjectSchema).optional(),
    some: z.lazy(() => coursesWhereInputObjectSchema).optional(),
    none: z.lazy(() => coursesWhereInputObjectSchema).optional(),
  })
  .strict()

export const CoursesListRelationFilterObjectSchema = Schema
