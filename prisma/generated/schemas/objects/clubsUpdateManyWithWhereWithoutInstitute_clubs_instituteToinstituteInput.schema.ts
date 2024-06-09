import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsScalarWhereInputObjectSchema } from "./clubsScalarWhereInput.schema"
import { clubsUncheckedUpdateManyWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedUpdateManyWithoutClubs_clubs_instituteToinstituteInput.schema"
import { clubsUpdateManyMutationInputObjectSchema } from "./clubsUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateManyWithWhereWithoutInstitute_clubs_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => clubsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => clubsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            clubsUncheckedUpdateManyWithoutClubs_clubs_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpdateManyWithWhereWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
