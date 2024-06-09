import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutRoutine_changesInputObjectSchema } from "./accountCreateWithoutRoutine_changesInput.schema"
import { accountUncheckedCreateWithoutRoutine_changesInputObjectSchema } from "./accountUncheckedCreateWithoutRoutine_changesInput.schema"
import { accountUncheckedUpdateWithoutRoutine_changesInputObjectSchema } from "./accountUncheckedUpdateWithoutRoutine_changesInput.schema"
import { accountUpdateWithoutRoutine_changesInputObjectSchema } from "./accountUpdateWithoutRoutine_changesInput.schema"

const Schema: z.ZodType<Prisma.accountUpsertWithoutRoutine_changesInput> = z
  .object({
    update: z.union([
      z.lazy(() => accountUpdateWithoutRoutine_changesInputObjectSchema),
      z.lazy(
        () => accountUncheckedUpdateWithoutRoutine_changesInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => accountCreateWithoutRoutine_changesInputObjectSchema),
      z.lazy(
        () => accountUncheckedCreateWithoutRoutine_changesInputObjectSchema
      ),
    ]),
  })
  .strict()

export const accountUpsertWithoutRoutine_changesInputObjectSchema = Schema
