import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileCreateOrConnectWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./profileUncheckedCreateWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateNestedOneWithoutClubs_clubs_coordinatorToprofileInput> =
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
      connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const profileCreateNestedOneWithoutClubs_clubs_coordinatorToprofileInputObjectSchema =
  Schema
