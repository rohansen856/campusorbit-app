import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileCreateOrConnectWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUncheckedUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUncheckedUpdateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUpdateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUpsertWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUpsertWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUpdateOneWithoutClubs_clubs_cocoordinatorToprofileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              profileCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z.lazy(
            () =>
              profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            profileCreateOrConnectWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            profileUpsertWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              profileUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
          ),
          z.lazy(
            () =>
              profileUncheckedUpdateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const profileUpdateOneWithoutClubs_clubs_cocoordinatorToprofileNestedInputObjectSchema =
  Schema
