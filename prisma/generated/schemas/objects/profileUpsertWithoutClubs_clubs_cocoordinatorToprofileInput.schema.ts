import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUncheckedUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUncheckedUpdateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUpdateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"

const Schema: z.ZodType<Prisma.profileUpsertWithoutClubs_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            profileUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        ),
        z.lazy(
          () =>
            profileUncheckedUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        ),
      ]),
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

export const profileUpsertWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
