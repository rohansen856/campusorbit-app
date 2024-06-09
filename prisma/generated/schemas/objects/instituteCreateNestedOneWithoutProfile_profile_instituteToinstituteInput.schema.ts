import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateNestedOneWithoutProfile_profile_instituteToinstituteInput> =
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
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const instituteCreateNestedOneWithoutProfile_profile_instituteToinstituteInputObjectSchema =
  Schema
