import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUpsertWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUpsertWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteUpdateOneRequiredWithoutRoutine_routine_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              instituteCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            instituteCreateOrConnectWithoutRoutine_routine_instituteToinstituteInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            instituteUpsertWithoutRoutine_routine_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              instituteUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const instituteUpdateOneRequiredWithoutRoutine_routine_instituteToinstituteNestedInputObjectSchema =
  Schema
