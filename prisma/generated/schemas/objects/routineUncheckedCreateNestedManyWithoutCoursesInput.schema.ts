import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateManyCoursesInputEnvelopeObjectSchema } from "./routineCreateManyCoursesInputEnvelope.schema"
import { routineCreateOrConnectWithoutCoursesInputObjectSchema } from "./routineCreateOrConnectWithoutCoursesInput.schema"
import { routineCreateWithoutCoursesInputObjectSchema } from "./routineCreateWithoutCoursesInput.schema"
import { routineUncheckedCreateWithoutCoursesInputObjectSchema } from "./routineUncheckedCreateWithoutCoursesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUncheckedCreateNestedManyWithoutCoursesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => routineCreateWithoutCoursesInputObjectSchema),
          z.lazy(() => routineCreateWithoutCoursesInputObjectSchema).array(),
          z.lazy(() => routineUncheckedCreateWithoutCoursesInputObjectSchema),
          z
            .lazy(() => routineUncheckedCreateWithoutCoursesInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => routineCreateOrConnectWithoutCoursesInputObjectSchema),
          z
            .lazy(() => routineCreateOrConnectWithoutCoursesInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => routineCreateManyCoursesInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => routineWhereUniqueInputObjectSchema),
          z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const routineUncheckedCreateNestedManyWithoutCoursesInputObjectSchema =
  Schema
