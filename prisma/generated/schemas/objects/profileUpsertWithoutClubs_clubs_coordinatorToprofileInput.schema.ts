import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUncheckedUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUncheckedUpdateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUpdateWithoutClubs_clubs_coordinatorToprofileInput.schema"

const Schema: z.ZodType<Prisma.profileUpsertWithoutClubs_clubs_coordinatorToprofileInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            profileUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            profileUncheckedUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        ),
      ]),
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

export const profileUpsertWithoutClubs_clubs_coordinatorToprofileInputObjectSchema =
  Schema
