import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelopeObjectSchema } from "./clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelope.schema"
import { clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsScalarWhereInputObjectSchema } from "./clubsScalarWhereInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUpdateManyWithWhereWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUpdateManyWithWhereWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUpdateWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUpdateWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUpsertWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUpsertWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUncheckedUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              clubsUpsertWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpsertWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelopeObjectSchema
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
              clubsUpdateWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpdateWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              clubsUpdateManyWithWhereWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUpdateManyWithWhereWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
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

export const clubsUncheckedUpdateManyWithoutProfile_clubs_cocoordinatorToprofileNestedInputObjectSchema =
  Schema
