import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_coordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
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

export const clubsCreateOrConnectWithoutProfile_clubs_coordinatorToprofileInputObjectSchema =
  Schema
