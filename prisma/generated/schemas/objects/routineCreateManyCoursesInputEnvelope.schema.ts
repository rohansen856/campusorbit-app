import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateManyCoursesInputObjectSchema } from "./routineCreateManyCoursesInput.schema"

const Schema: z.ZodType<Prisma.routineCreateManyCoursesInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => routineCreateManyCoursesInputObjectSchema),
      z.lazy(() => routineCreateManyCoursesInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const routineCreateManyCoursesInputEnvelopeObjectSchema = Schema
