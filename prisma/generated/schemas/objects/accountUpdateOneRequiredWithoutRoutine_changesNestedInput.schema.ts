import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateOrConnectWithoutRoutine_changesInputObjectSchema } from "./accountCreateOrConnectWithoutRoutine_changesInput.schema"
import { accountCreateWithoutRoutine_changesInputObjectSchema } from "./accountCreateWithoutRoutine_changesInput.schema"
import { accountUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./accountUncheckedCreateWithoutRoutine_changesInput.schema"
import { accountUncheckedUpdateWithoutRoutine_changesInputObjectSchema } from "./accountUncheckedUpdateWithoutRoutine_changesInput.schema"
import { accountUpdateWithoutRoutine_changesInputObjectSchema } from "./accountUpdateWithoutRoutine_changesInput.schema"
import { accountUpsertWithoutRoutine_changesInputObjectSchema } from "./accountUpsertWithoutRoutine_changesInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateOneRequiredWithoutRoutine_changesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => accountCreateWithoutRoutine_changesInputObjectSchema),
          z.lazy(
            () => accountUncheckedCreateWithoutRoutine_changesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => accountCreateOrConnectWithoutRoutine_changesInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => accountUpsertWithoutRoutine_changesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => accountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => accountUpdateWithoutRoutine_changesInputObjectSchema),
          z.lazy(
            () => accountUncheckedUpdateWithoutRoutine_changesInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const accountUpdateOneRequiredWithoutRoutine_changesNestedInputObjectSchema =
  Schema
