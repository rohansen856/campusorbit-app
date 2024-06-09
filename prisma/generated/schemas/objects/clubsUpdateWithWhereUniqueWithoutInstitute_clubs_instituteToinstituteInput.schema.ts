import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsUncheckedUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedUpdateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUpdateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUpdateWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            clubsUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpdateWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
