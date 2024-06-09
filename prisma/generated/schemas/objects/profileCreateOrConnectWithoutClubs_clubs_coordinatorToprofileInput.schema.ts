import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateOrConnectWithoutClubs_clubs_coordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => profileWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            profileCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const profileCreateOrConnectWithoutClubs_clubs_coordinatorToprofileInputObjectSchema =
  Schema
