import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateOrConnectWithoutRoutine_changesInputObjectSchema } from "./accountCreateOrConnectWithoutRoutine_changesInput.schema"
import { accountCreateWithoutRoutine_changesInputObjectSchema } from "./accountCreateWithoutRoutine_changesInput.schema"
import { accountUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./accountUncheckedCreateWithoutRoutine_changesInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountCreateNestedOneWithoutRoutine_changesInput> =
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
      connect: z.lazy(() => accountWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const accountCreateNestedOneWithoutRoutine_changesInputObjectSchema =
  Schema
