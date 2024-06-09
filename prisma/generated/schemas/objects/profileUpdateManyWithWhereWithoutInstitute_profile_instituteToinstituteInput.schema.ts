import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileScalarWhereInputObjectSchema } from "./profileScalarWhereInput.schema"
import { profileUncheckedUpdateManyWithoutProfile_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedUpdateManyWithoutProfile_profile_instituteToinstituteInput.schema"
import { profileUpdateManyMutationInputObjectSchema } from "./profileUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.profileUpdateManyWithWhereWithoutInstitute_profile_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => profileScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => profileUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            profileUncheckedUpdateManyWithoutProfile_profile_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const profileUpdateManyWithWhereWithoutInstitute_profile_instituteToinstituteInputObjectSchema =
  Schema
