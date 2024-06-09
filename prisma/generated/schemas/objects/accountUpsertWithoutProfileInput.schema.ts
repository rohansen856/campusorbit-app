import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutProfileInputObjectSchema } from "./accountCreateWithoutProfileInput.schema"
import { accountUncheckedCreateWithoutProfileInputObjectSchema } from "./accountUncheckedCreateWithoutProfileInput.schema"
import { accountUncheckedUpdateWithoutProfileInputObjectSchema } from "./accountUncheckedUpdateWithoutProfileInput.schema"
import { accountUpdateWithoutProfileInputObjectSchema } from "./accountUpdateWithoutProfileInput.schema"

const Schema: z.ZodType<Prisma.accountUpsertWithoutProfileInput> = z
  .object({
    update: z.union([
      z.lazy(() => accountUpdateWithoutProfileInputObjectSchema),
      z.lazy(() => accountUncheckedUpdateWithoutProfileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => accountCreateWithoutProfileInputObjectSchema),
      z.lazy(() => accountUncheckedCreateWithoutProfileInputObjectSchema),
    ]),
  })
  .strict()

export const accountUpsertWithoutProfileInputObjectSchema = Schema
