import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileCreateOrConnectWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateNestedOneWithoutClubs_clubs_cocoordinatorToprofileInput> =
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
      connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const profileCreateNestedOneWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
