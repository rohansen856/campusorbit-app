import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineScalarWhereInputObjectSchema } from "./routineScalarWhereInput.schema"
import { routineUncheckedUpdateManyWithoutRoutine_routine_instituteToinstituteInputObjectSchema } from "./routineUncheckedUpdateManyWithoutRoutine_routine_instituteToinstituteInput.schema"
import { routineUpdateManyMutationInputObjectSchema } from "./routineUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateManyWithWhereWithoutInstitute_routine_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => routineScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => routineUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            routineUncheckedUpdateManyWithoutRoutine_routine_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routineUpdateManyWithWhereWithoutInstitute_routine_instituteToinstituteInputObjectSchema =
  Schema
