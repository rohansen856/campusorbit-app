import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutClubs_clubs_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateNestedOneWithoutClubs_clubs_instituteToinstituteInput> =
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
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const instituteCreateNestedOneWithoutClubs_clubs_instituteToinstituteInputObjectSchema =
  Schema
