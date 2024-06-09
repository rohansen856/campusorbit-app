import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsScalarWhereInputObjectSchema } from "./clubsScalarWhereInput.schema"
import { clubsUncheckedUpdateManyWithoutClubs_clubs_coordinatorToprofileInputObjectSchema } from "./clubsUncheckedUpdateManyWithoutClubs_clubs_coordinatorToprofileInput.schema"
import { clubsUpdateManyMutationInputObjectSchema } from "./clubsUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateManyWithWhereWithoutProfile_clubs_coordinatorToprofileInput> =
  z
    .object({
      where: z.lazy(() => clubsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => clubsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            clubsUncheckedUpdateManyWithoutClubs_clubs_coordinatorToprofileInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpdateManyWithWhereWithoutProfile_clubs_coordinatorToprofileInputObjectSchema =
  Schema
