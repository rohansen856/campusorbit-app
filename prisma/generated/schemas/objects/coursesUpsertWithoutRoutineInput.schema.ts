import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateWithoutRoutineInputObjectSchema } from "./coursesCreateWithoutRoutineInput.schema"
import { coursesUncheckedCreateWithoutRoutineInputObjectSchema } from "./coursesUncheckedCreateWithoutRoutineInput.schema"
import { coursesUncheckedUpdateWithoutRoutineInputObjectSchema } from "./coursesUncheckedUpdateWithoutRoutineInput.schema"
import { coursesUpdateWithoutRoutineInputObjectSchema } from "./coursesUpdateWithoutRoutineInput.schema"

const Schema: z.ZodType<Prisma.coursesUpsertWithoutRoutineInput> = z
  .object({
    update: z.union([
      z.lazy(() => coursesUpdateWithoutRoutineInputObjectSchema),
      z.lazy(() => coursesUncheckedUpdateWithoutRoutineInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => coursesCreateWithoutRoutineInputObjectSchema),
      z.lazy(() => coursesUncheckedCreateWithoutRoutineInputObjectSchema),
    ]),
  })
  .strict()

export const coursesUpsertWithoutRoutineInputObjectSchema = Schema
