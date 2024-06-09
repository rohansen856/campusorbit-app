import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUncheckedUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedUpdateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUpdateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUpsertWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            clubsUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            clubsCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpsertWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema =
  Schema
