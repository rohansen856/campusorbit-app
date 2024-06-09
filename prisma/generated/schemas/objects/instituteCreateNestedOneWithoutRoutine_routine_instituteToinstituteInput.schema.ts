import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateNestedOneWithoutRoutine_routine_instituteToinstituteInput> =
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
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const instituteCreateNestedOneWithoutRoutine_routine_instituteToinstituteInputObjectSchema =
  Schema
