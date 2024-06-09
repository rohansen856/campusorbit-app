import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUncheckedUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUncheckedUpdateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUpsertWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpsertWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
