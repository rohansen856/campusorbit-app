import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutProfileInputObjectSchema } from "./accountCreateWithoutProfileInput.schema"
import { accountUncheckedCreateWithoutProfileInputObjectSchema } from "./accountUncheckedCreateWithoutProfileInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountCreateOrConnectWithoutProfileInput> = z
  .object({
    where: z.lazy(() => accountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => accountCreateWithoutProfileInputObjectSchema),
      z.lazy(() => accountUncheckedCreateWithoutProfileInputObjectSchema),
    ]),
  })
  .strict()

export const accountCreateOrConnectWithoutProfileInputObjectSchema = Schema
