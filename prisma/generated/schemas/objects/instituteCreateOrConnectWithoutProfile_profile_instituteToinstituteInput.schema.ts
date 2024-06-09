import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateOrConnectWithoutProfile_profile_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => instituteWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            instituteCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedCreateWithoutProfile_profile_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const instituteCreateOrConnectWithoutProfile_profile_instituteToinstituteInputObjectSchema =
  Schema
