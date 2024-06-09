import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsScalarWhereInputObjectSchema } from "./clubsScalarWhereInput.schema"
import { clubsUncheckedUpdateManyWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema } from "./clubsUncheckedUpdateManyWithoutClubs_clubs_cocoordinatorToprofileInput.schema"
import { clubsUpdateManyMutationInputObjectSchema } from "./clubsUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateManyWithWhereWithoutProfile_clubs_cocoordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => clubsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            clubsUncheckedUpdateManyWithoutClubs_clubs_cocoordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpdateManyWithWhereWithoutProfile_clubs_cocoordinatorToprofileInputObjectSchema =
  Schema
