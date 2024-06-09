import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelopeObjectSchema } from "./clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelope.schema"
import { clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInput> =
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
      createMany: z
        .lazy(
          () =>
            clubsCreateManyProfile_clubs_coordinatorToprofileInputEnvelopeObjectSchema
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

export const clubsCreateNestedManyWithoutProfile_clubs_coordinatorToprofileInputObjectSchema =
  Schema
