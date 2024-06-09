import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileUncheckedUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedUpdateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUpdateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUpdateWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => profileWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            profileUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            profileUncheckedUpdateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const profileUpdateWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema =
  Schema
