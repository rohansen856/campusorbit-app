import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelopeObjectSchema } from "./clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelope.schema"
import { clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateNestedManyWithoutProfile_clubs_cocoordinatorToprofileInput> =
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
      createMany: z
        .lazy(
          () =>
            clubsCreateManyProfile_clubs_cocoordinatorToprofileInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const clubsCreateNestedManyWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
