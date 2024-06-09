import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedCreateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => routineWhereUniqueInputObjectSchema),
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

export const routineCreateOrConnectWithoutInstitute_routine_instituteToinstituteInputObjectSchema =
  Schema
