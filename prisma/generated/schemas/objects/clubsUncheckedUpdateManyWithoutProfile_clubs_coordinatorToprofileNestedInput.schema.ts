import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelopeObjectSchema } from "./clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelope.schema"
import { clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsScalarWhereInputObjectSchema } from "./clubsScalarWhereInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUpdateManyWithWhereWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUpdateManyWithWhereWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUpdateWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUpdateWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUpsertWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUpsertWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUncheckedUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              clubsCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              clubsUpsertWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpsertWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelopeObjectSchema
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              clubsUpdateWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpdateWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              clubsUpdateManyWithWhereWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpdateManyWithWhereWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => clubsScalarWhereInputObjectSchema),
          z.lazy(() => clubsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const clubsUncheckedUpdateManyWithoutProfile_clubs_coordinatorToprofileNestedInputObjectSchema =
  Schema
