import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateOrConnectWithoutRoutine_changesInputObjectSchema } from "./routineCreateOrConnectWithoutRoutine_changesInput.schema"
import { routineCreateWithoutRoutine_changesInputObjectSchema } from "./routineCreateWithoutRoutine_changesInput.schema"
import { routineUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./routineUncheckedCreateWithoutRoutine_changesInput.schema"
import { routineUncheckedUpdateWithoutRoutine_changesInputObjectSchema } from "./routineUncheckedUpdateWithoutRoutine_changesInput.schema"
import { routineUpdateWithoutRoutine_changesInputObjectSchema } from "./routineUpdateWithoutRoutine_changesInput.schema"
import { routineUpsertWithoutRoutine_changesInputObjectSchema } from "./routineUpsertWithoutRoutine_changesInput.schema"
import { routineWhereUniqueInputObjectSchema } from "./routineWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routineUpdateOneRequiredWithoutRoutine_changesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => routineCreateWithoutRoutine_changesInputObjectSchema),
          z.lazy(
            () => routineUncheckedCreateWithoutRoutine_changesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => routineCreateOrConnectWithoutRoutine_changesInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => routineUpsertWithoutRoutine_changesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => routineWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => routineUpdateWithoutRoutine_changesInputObjectSchema),
          z.lazy(
            () => routineUncheckedUpdateWithoutRoutine_changesInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const routineUpdateOneRequiredWithoutRoutine_changesNestedInputObjectSchema =
  Schema
