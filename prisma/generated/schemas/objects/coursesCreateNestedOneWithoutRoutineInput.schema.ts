import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateOrConnectWithoutRoutineInputObjectSchema } from "./coursesCreateOrConnectWithoutRoutineInput.schema"
import { coursesCreateWithoutRoutineInputObjectSchema } from "./coursesCreateWithoutRoutineInput.schema"
import { coursesUncheckedCreateWithoutRoutineInputObjectSchema } from "./coursesUncheckedCreateWithoutRoutineInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesCreateNestedOneWithoutRoutineInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => coursesCreateWithoutRoutineInputObjectSchema),
        z.lazy(() => coursesUncheckedCreateWithoutRoutineInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => coursesCreateOrConnectWithoutRoutineInputObjectSchema)
      .optional(),
    connect: z.lazy(() => coursesWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const coursesCreateNestedOneWithoutRoutineInputObjectSchema = Schema
