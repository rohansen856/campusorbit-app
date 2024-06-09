import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutRoutine_routine_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUpsertWithoutRoutine_routine_instituteToinstituteInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            instituteUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedUpdateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            instituteCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const instituteUpsertWithoutRoutine_routine_instituteToinstituteInputObjectSchema =
  Schema
