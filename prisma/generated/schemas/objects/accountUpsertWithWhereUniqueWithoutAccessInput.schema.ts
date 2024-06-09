import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutAccessInputObjectSchema } from "./accountCreateWithoutAccessInput.schema"
import { accountUncheckedCreateWithoutAccessInputObjectSchema } from "./accountUncheckedCreateWithoutAccessInput.schema"
import { accountUncheckedUpdateWithoutAccessInputObjectSchema } from "./accountUncheckedUpdateWithoutAccessInput.schema"
import { accountUpdateWithoutAccessInputObjectSchema } from "./accountUpdateWithoutAccessInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUpsertWithWhereUniqueWithoutAccessInput> =
  z
    .object({
      where: z.lazy(() => accountWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => accountUpdateWithoutAccessInputObjectSchema),
        z.lazy(() => accountUncheckedUpdateWithoutAccessInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => accountCreateWithoutAccessInputObjectSchema),
        z.lazy(() => accountUncheckedCreateWithoutAccessInputObjectSchema),
      ]),
    })
    .strict()

export const accountUpsertWithWhereUniqueWithoutAccessInputObjectSchema = Schema
