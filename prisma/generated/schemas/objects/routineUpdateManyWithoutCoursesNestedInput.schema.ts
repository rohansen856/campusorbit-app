import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateManyCoursesInputEnvelopeObjectSchema } from "./routineCreateManyCoursesInputEnvelope.schema"
import { routineCreateOrConnectWithoutCoursesInputObjectSchema } from "./routineCreateOrConnectWithoutCoursesInput.schema"
import { routineCreateWithoutCoursesInputObjectSchema } from "./routineCreateWithoutCoursesInput.schema"
import { routineScalarWhereInputObjectSchema } from "./routineScalarWhereInput.schema"
import { routineUncheckedCreateWithoutCoursesInputObjectSchema } from "./routineUncheckedCreateWithoutCoursesInput.schema"
import { routineUpdateManyWithWhereWithoutCoursesInputObjectSchema } from "./routineUpdateManyWithWhereWithoutCoursesInput.schema"
import { routineUpdateWithWhereUniqueWithoutCoursesInputObjectSchema } from "./routineUpdateWithWhereUniqueWithoutCoursesInput.schema"
import { routineUpsertWithWhereUniqueWithoutCoursesInputObjectSchema } from "./routineUpsertWithWhereUniqueWithoutCoursesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateManyWithoutCoursesNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => routineUpsertWithWhereUniqueWithoutCoursesInputObjectSchema
        ),
        z
          .lazy(
            () => routineUpsertWithWhereUniqueWithoutCoursesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => routineCreateManyCoursesInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => routineWhereUniqueInputObjectSchema),
        z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => routineWhereUniqueInputObjectSchema),
        z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => routineWhereUniqueInputObjectSchema),
        z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => routineWhereUniqueInputObjectSchema),
        z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => routineUpdateWithWhereUniqueWithoutCoursesInputObjectSchema
        ),
        z
          .lazy(
            () => routineUpdateWithWhereUniqueWithoutCoursesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => routineUpdateManyWithWhereWithoutCoursesInputObjectSchema),
        z
          .lazy(() => routineUpdateManyWithWhereWithoutCoursesInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => routineScalarWhereInputObjectSchema),
        z.lazy(() => routineScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const routineUpdateManyWithoutCoursesNestedInputObjectSchema = Schema
