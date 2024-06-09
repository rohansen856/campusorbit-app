import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutRoutine_changesInputObjectSchema } from "./accountCreateWithoutRoutine_changesInput.schema"
import { accountUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./accountUncheckedCreateWithoutRoutine_changesInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountCreateOrConnectWithoutRoutine_changesInput> =
  z
    .object({
      where: z.lazy(() => accountWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => accountCreateWithoutRoutine_changesInputObjectSchema),
        z.lazy(
          () => accountUncheckedCreateWithoutRoutine_changesInputObjectSchema
        ),
      ]),
    })
    .strict()

export const accountCreateOrConnectWithoutRoutine_changesInputObjectSchema =
  Schema
