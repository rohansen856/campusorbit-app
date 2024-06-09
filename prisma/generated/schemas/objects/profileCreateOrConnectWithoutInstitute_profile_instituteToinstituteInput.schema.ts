import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => profileWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInputObjectSchema =
  Schema
