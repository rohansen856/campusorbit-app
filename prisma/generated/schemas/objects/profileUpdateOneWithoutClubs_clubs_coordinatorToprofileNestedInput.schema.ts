import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileCreateOrConnectWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUncheckedUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUncheckedUpdateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUpdateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUpsertWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUpsertWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUpdateOneWithoutClubs_clubs_coordinatorToprofileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              profileCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
          ),
          z.lazy(
            () =>
              profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            profileCreateOrConnectWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            profileUpsertWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              profileUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
          ),
          z.lazy(
            () =>
              profileUncheckedUpdateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const profileUpdateOneWithoutClubs_clubs_coordinatorToprofileNestedInputObjectSchema =
  Schema
