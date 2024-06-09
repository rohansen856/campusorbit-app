import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateOrConnectWithoutClubs_clubs_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => instituteWhereUniqueInputObjectSchema),
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

export const instituteCreateOrConnectWithoutClubs_clubs_instituteToinstituteInputObjectSchema =
  Schema
