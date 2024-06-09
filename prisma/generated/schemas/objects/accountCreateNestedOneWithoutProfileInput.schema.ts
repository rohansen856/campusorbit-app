import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateOrConnectWithoutProfileInputObjectSchema } from "./accountCreateOrConnectWithoutProfileInput.schema"
import { accountCreateWithoutProfileInputObjectSchema } from "./accountCreateWithoutProfileInput.schema"
import { accountUncheckedCreateWithoutProfileInputObjectSchema } from "./accountUncheckedCreateWithoutProfileInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountCreateNestedOneWithoutProfileInput> = z
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
    connect: z.lazy(() => accountWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const accountCreateNestedOneWithoutProfileInputObjectSchema = Schema
