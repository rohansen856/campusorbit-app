import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutRoutine_routine_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateOrConnectWithoutRoutine_routine_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => instituteWhereUniqueInputObjectSchema),
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

export const instituteCreateOrConnectWithoutRoutine_routine_instituteToinstituteInputObjectSchema =
  Schema
