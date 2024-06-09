import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUncheckedUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedUpdateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUpdateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUpsertWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            clubsUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedUpdateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsUpsertWithWhereUniqueWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
