import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routine_changesCreateManyAccountInputEnvelopeObjectSchema } from "./routine_changesCreateManyAccountInputEnvelope.schema"
import { routine_changesCreateOrConnectWithoutAccountInputObjectSchema } from "./routine_changesCreateOrConnectWithoutAccountInput.schema"
import { routine_changesCreateWithoutAccountInputObjectSchema } from "./routine_changesCreateWithoutAccountInput.schema"
import { routine_changesScalarWhereInputObjectSchema } from "./routine_changesScalarWhereInput.schema"
import { routine_changesUncheckedCreateWithoutAccountInputObjectSchema } from "./routine_changesUncheckedCreateWithoutAccountInput.schema"
import { routine_changesUpdateManyWithWhereWithoutAccountInputObjectSchema } from "./routine_changesUpdateManyWithWhereWithoutAccountInput.schema"
import { routine_changesUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from "./routine_changesUpdateWithWhereUniqueWithoutAccountInput.schema"
import { routine_changesUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from "./routine_changesUpsertWithWhereUniqueWithoutAccountInput.schema"
import { routine_changesWhereUniqueInputObjectSchema } from "./routine_changesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.routine_changesUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => routine_changesCreateWithoutAccountInputObjectSchema),
          z
            .lazy(() => routine_changesCreateWithoutAccountInputObjectSchema)
            .array(),
          z.lazy(
            () => routine_changesUncheckedCreateWithoutAccountInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUncheckedCreateWithoutAccountInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => routine_changesCreateOrConnectWithoutAccountInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesCreateOrConnectWithoutAccountInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              routine_changesUpsertWithWhereUniqueWithoutAccountInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUpsertWithWhereUniqueWithoutAccountInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => routine_changesCreateManyAccountInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema),
          z.lazy(() => routine_changesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              routine_changesUpdateWithWhereUniqueWithoutAccountInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUpdateWithWhereUniqueWithoutAccountInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              routine_changesUpdateManyWithWhereWithoutAccountInputObjectSchema
          ),
          z
            .lazy(
              () =>
                routine_changesUpdateManyWithWhereWithoutAccountInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => routine_changesScalarWhereInputObjectSchema),
          z.lazy(() => routine_changesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const routine_changesUncheckedUpdateManyWithoutAccountNestedInputObjectSchema =
  Schema
