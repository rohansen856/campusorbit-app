import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateManyAccessInputEnvelopeObjectSchema } from "./accountCreateManyAccessInputEnvelope.schema"
import { accountCreateOrConnectWithoutAccessInputObjectSchema } from "./accountCreateOrConnectWithoutAccessInput.schema"
import { accountCreateWithoutAccessInputObjectSchema } from "./accountCreateWithoutAccessInput.schema"
import { accountUncheckedCreateWithoutAccessInputObjectSchema } from "./accountUncheckedCreateWithoutAccessInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUncheckedCreateNestedManyWithoutAccessInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => accountCreateWithoutAccessInputObjectSchema),
          z.lazy(() => accountCreateWithoutAccessInputObjectSchema).array(),
          z.lazy(() => accountUncheckedCreateWithoutAccessInputObjectSchema),
          z
            .lazy(() => accountUncheckedCreateWithoutAccessInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => accountCreateOrConnectWithoutAccessInputObjectSchema),
          z
            .lazy(() => accountCreateOrConnectWithoutAccessInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => accountCreateManyAccessInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const accountUncheckedCreateNestedManyWithoutAccessInputObjectSchema =
  Schema
