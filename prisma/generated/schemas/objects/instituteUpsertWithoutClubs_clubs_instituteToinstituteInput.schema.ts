import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutClubs_clubs_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUpsertWithoutClubs_clubs_instituteToinstituteInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            instituteUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            instituteCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const instituteUpsertWithoutClubs_clubs_instituteToinstituteInputObjectSchema =
  Schema
