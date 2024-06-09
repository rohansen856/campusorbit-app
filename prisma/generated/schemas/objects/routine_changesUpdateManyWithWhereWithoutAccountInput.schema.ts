import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesScalarWhereInputObjectSchema } from "./routine_changesScalarWhereInput.schema"
import { routine_changesUncheckedUpdateManyWithoutRoutine_changesInputObjectSchema } from "./routine_changesUncheckedUpdateManyWithoutRoutine_changesInput.schema"
import { routine_changesUpdateManyMutationInputObjectSchema } from "./routine_changesUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUpdateManyWithWhereWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => routine_changesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => routine_changesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            routine_changesUncheckedUpdateManyWithoutRoutine_changesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const routine_changesUpdateManyWithWhereWithoutAccountInputObjectSchema =
  Schema
