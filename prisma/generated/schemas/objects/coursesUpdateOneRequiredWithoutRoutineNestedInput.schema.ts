import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateOrConnectWithoutRoutineInputObjectSchema } from "./coursesCreateOrConnectWithoutRoutineInput.schema"
import { coursesCreateWithoutRoutineInputObjectSchema } from "./coursesCreateWithoutRoutineInput.schema"
import { coursesUncheckedCreateWithoutRoutineInputObjectSchema } from "./coursesUncheckedCreateWithoutRoutineInput.schema"
import { coursesUncheckedUpdateWithoutRoutineInputObjectSchema } from "./coursesUncheckedUpdateWithoutRoutineInput.schema"
import { coursesUpdateWithoutRoutineInputObjectSchema } from "./coursesUpdateWithoutRoutineInput.schema"
import { coursesUpsertWithoutRoutineInputObjectSchema } from "./coursesUpsertWithoutRoutineInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesUpdateOneRequiredWithoutRoutineNestedInput> =
  z
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
      upsert: z
        .lazy(() => coursesUpsertWithoutRoutineInputObjectSchema)
        .optional(),
      connect: z.lazy(() => coursesWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => coursesUpdateWithoutRoutineInputObjectSchema),
          z.lazy(() => coursesUncheckedUpdateWithoutRoutineInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const coursesUpdateOneRequiredWithoutRoutineNestedInputObjectSchema =
  Schema
