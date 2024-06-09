import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateOrConnectWithoutClubs_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => profileWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            profileCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const profileCreateOrConnectWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
