import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateOrConnectWithoutProfileInputObjectSchema } from "./accountCreateOrConnectWithoutProfileInput.schema"
import { accountCreateWithoutProfileInputObjectSchema } from "./accountCreateWithoutProfileInput.schema"
import { accountUncheckedCreateWithoutProfileInputObjectSchema } from "./accountUncheckedCreateWithoutProfileInput.schema"
import { accountUncheckedUpdateWithoutProfileInputObjectSchema } from "./accountUncheckedUpdateWithoutProfileInput.schema"
import { accountUpdateWithoutProfileInputObjectSchema } from "./accountUpdateWithoutProfileInput.schema"
import { accountUpsertWithoutProfileInputObjectSchema } from "./accountUpsertWithoutProfileInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateOneRequiredWithoutProfileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => accountCreateWithoutProfileInputObjectSchema),
          z.lazy(() => accountUncheckedCreateWithoutProfileInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => accountCreateOrConnectWithoutProfileInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => accountUpsertWithoutProfileInputObjectSchema)
        .optional(),
      connect: z.lazy(() => accountWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => accountUpdateWithoutProfileInputObjectSchema),
          z.lazy(() => accountUncheckedUpdateWithoutProfileInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const accountUpdateOneRequiredWithoutProfileNestedInputObjectSchema =
  Schema
