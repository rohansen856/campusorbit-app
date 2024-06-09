import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsUncheckedUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedUpdateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUpdateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            clubsUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedUpdateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpdateWithWhereUniqueWithoutProfile_clubs_coordinatorToprofileInputObjectSchema =
  Schema
