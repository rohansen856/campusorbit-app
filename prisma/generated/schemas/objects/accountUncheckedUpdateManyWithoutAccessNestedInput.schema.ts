import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountCreateManyAccessInputEnvelopeObjectSchema } from "./accountCreateManyAccessInputEnvelope.schema"
import { accountCreateOrConnectWithoutAccessInputObjectSchema } from "./accountCreateOrConnectWithoutAccessInput.schema"
import { accountCreateWithoutAccessInputObjectSchema } from "./accountCreateWithoutAccessInput.schema"
import { accountScalarWhereInputObjectSchema } from "./accountScalarWhereInput.schema"
import { accountUncheckedCreateWithoutAccessInputObjectSchema } from "./accountUncheckedCreateWithoutAccessInput.schema"
import { accountUpdateManyWithWhereWithoutAccessInputObjectSchema } from "./accountUpdateManyWithWhereWithoutAccessInput.schema"
import { accountUpdateWithWhereUniqueWithoutAccessInputObjectSchema } from "./accountUpdateWithWhereUniqueWithoutAccessInput.schema"
import { accountUpsertWithWhereUniqueWithoutAccessInputObjectSchema } from "./accountUpsertWithWhereUniqueWithoutAccessInput.schema"
import { accountWhereUniqueInputObjectSchema } from "./accountWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accountUncheckedUpdateManyWithoutAccessNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => accountUpsertWithWhereUniqueWithoutAccessInputObjectSchema
          ),
          z
            .lazy(
              () => accountUpsertWithWhereUniqueWithoutAccessInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => accountCreateManyAccessInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => accountWhereUniqueInputObjectSchema),
          z.lazy(() => accountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => accountUpdateWithWhereUniqueWithoutAccessInputObjectSchema
          ),
          z
            .lazy(
              () => accountUpdateWithWhereUniqueWithoutAccessInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => accountUpdateManyWithWhereWithoutAccessInputObjectSchema
          ),
          z
            .lazy(
              () => accountUpdateManyWithWhereWithoutAccessInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => accountScalarWhereInputObjectSchema),
          z.lazy(() => accountScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const accountUncheckedUpdateManyWithoutAccessNestedInputObjectSchema =
  Schema
