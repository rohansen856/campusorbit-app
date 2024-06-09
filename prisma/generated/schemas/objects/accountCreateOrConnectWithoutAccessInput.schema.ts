import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateWithoutAccessInputObjectSchema } from "./accountCreateWithoutAccessInput.schema"
import { accountUncheckedCreateWithoutAccessInputObjectSchema } from "./accountUncheckedCreateWithoutAccessInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountCreateOrConnectWithoutAccessInput> = z
  .object({
    where: z.lazy(() => accountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => accountCreateWithoutAccessInputObjectSchema),
      z.lazy(() => accountUncheckedCreateWithoutAccessInputObjectSchema),
    ]),
  })
  .strict()

export const accountCreateOrConnectWithoutAccessInputObjectSchema = Schema
