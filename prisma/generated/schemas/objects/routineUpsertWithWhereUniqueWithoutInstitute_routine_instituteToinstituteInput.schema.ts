import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUncheckedUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedUpdateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUpdateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUpsertWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => routineWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            routineUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            routineUncheckedUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routineUpsertWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema =
  Schema
