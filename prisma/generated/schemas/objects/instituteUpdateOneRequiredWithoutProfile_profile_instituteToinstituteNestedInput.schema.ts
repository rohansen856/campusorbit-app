import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUpsertWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUpsertWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteUpdateOneRequiredWithoutProfile_profile_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              instituteCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            instituteCreateOrConnectWithoutProfile_profile_instituteToinstituteInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            instituteUpsertWithoutProfile_profile_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              instituteUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedUpdateWithoutProfile_profile_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const instituteUpdateOneRequiredWithoutProfile_profile_instituteToinstituteNestedInputObjectSchema =
  Schema
