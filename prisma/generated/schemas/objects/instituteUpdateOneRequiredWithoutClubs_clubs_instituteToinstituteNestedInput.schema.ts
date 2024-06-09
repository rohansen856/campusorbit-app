import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUpsertWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUpsertWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteUpdateOneRequiredWithoutClubs_clubs_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              instituteCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            instituteCreateOrConnectWithoutClubs_clubs_instituteToinstituteInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            instituteUpsertWithoutClubs_clubs_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              instituteUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedUpdateWithoutClubs_clubs_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const instituteUpdateOneRequiredWithoutClubs_clubs_instituteToinstituteNestedInputObjectSchema =
  Schema
