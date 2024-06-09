import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsUncheckedUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUncheckedUpdateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            clubsUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedUpdateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpdateWithWhereUniqueWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
