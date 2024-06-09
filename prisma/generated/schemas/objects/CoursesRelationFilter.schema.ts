import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesWhereInputObjectSchema } from "./coursesWhereInput.schema"

const Schema: z.ZodType<Prisma.CoursesRelationFilter> = z
  .object({
    is: z
      .lazy(() => coursesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => coursesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const CoursesRelationFilterObjectSchema = Schema
