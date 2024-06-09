import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateWithoutRoutineInputObjectSchema } from "./coursesCreateWithoutRoutineInput.schema"
import { coursesUncheckedCreateWithoutRoutineInputObjectSchema } from "./coursesUncheckedCreateWithoutRoutineInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesCreateOrConnectWithoutRoutineInput> = z
  .object({
    where: z.lazy(() => coursesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => coursesCreateWithoutRoutineInputObjectSchema),
      z.lazy(() => coursesUncheckedCreateWithoutRoutineInputObjectSchema),
    ]),
  })
  .strict()

export const coursesCreateOrConnectWithoutRoutineInputObjectSchema = Schema
