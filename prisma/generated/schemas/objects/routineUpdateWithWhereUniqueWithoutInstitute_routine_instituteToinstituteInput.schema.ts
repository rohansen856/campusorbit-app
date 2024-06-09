import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineUncheckedUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedUpdateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema } from "./routineUpdateWithoutInstitute_routine_instituteToinstituteInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => routineWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            routineUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            routineUncheckedUpdateWithoutInstitute_routine_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routineUpdateWithWhereUniqueWithoutInstitute_routine_instituteToinstituteInputObjectSchema =
  Schema
