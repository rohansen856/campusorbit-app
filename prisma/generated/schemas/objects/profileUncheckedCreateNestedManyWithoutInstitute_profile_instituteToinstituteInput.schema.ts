import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateManyInstitute_profile_instituteToinstituteInputEnvelopeObjectSchema } from "./profileCreateManyInstitute_profile_instituteToinstituteInputEnvelope.schema"
import { profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUncheckedCreateNestedManyWithoutInstitute_profile_instituteToinstituteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            profileCreateManyInstitute_profile_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => profileWhereUniqueInputObjectSchema),
          z.lazy(() => profileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const profileUncheckedCreateNestedManyWithoutInstitute_profile_instituteToinstituteInputObjectSchema =
  Schema
