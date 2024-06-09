import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateManyInstitute_routine_instituteToinstituteInputEnvelopeObjectSchema } from "./routineCreateManyInstitute_routine_instituteToinstituteInputEnvelope.schema"
import { routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineCreateNestedManyWithoutInstitute_routine_instituteToinstituteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            routineCreateManyInstitute_routine_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => routineWhereUniqueInputObjectSchema),
          z.lazy(() => routineWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const routineCreateNestedManyWithoutInstitute_routine_instituteToinstituteInputObjectSchema =
  Schema
