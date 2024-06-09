import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUncheckedCreateWithoutProfile_clubs_cocoordinatorToprofileInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
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

export const clubsCreateOrConnectWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
