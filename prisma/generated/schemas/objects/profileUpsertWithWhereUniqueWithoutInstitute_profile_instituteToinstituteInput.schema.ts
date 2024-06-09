import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUncheckedUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedUpdateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUpdateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUpsertWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => profileWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            profileUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            profileUncheckedUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        ),
      ]),
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

export const profileUpsertWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema =
  Schema
