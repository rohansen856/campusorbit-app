import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountUncheckedUpdateWithoutAccessInputObjectSchema } from "./accountUncheckedUpdateWithoutAccessInput.schema"
import { accountUpdateWithoutAccessInputObjectSchema } from "./accountUpdateWithoutAccessInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateWithWhereUniqueWithoutAccessInput> =
  z
    .object({
      where: z.lazy(() => accountWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => accountUpdateWithoutAccessInputObjectSchema),
        z.lazy(() => accountUncheckedUpdateWithoutAccessInputObjectSchema),
      ]),
    })
    .strict()

export const accountUpdateWithWhereUniqueWithoutAccessInputObjectSchema = Schema
