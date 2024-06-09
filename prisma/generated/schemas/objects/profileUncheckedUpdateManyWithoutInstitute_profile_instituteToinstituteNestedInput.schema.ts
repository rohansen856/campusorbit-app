import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateManyInstitute_profile_instituteToinstituteInputEnvelopeObjectSchema } from "./profileCreateManyInstitute_profile_instituteToinstituteInputEnvelope.schema"
import { profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateOrConnectWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileScalarWhereInputObjectSchema } from "./profileScalarWhereInput.schema"
import { profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUncheckedCreateWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUpdateManyWithWhereWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUpdateManyWithWhereWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUpdateWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUpdateWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileUpsertWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema } from "./profileUpsertWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUncheckedUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              profileUpsertWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                profileUpsertWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema
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
      set: z
        .union([
          z.lazy(() => profileWhereUniqueInputObjectSchema),
          z.lazy(() => profileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => profileWhereUniqueInputObjectSchema),
          z.lazy(() => profileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => profileWhereUniqueInputObjectSchema),
          z.lazy(() => profileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => profileWhereUniqueInputObjectSchema),
          z.lazy(() => profileWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              profileUpdateWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                profileUpdateWithWhereUniqueWithoutInstitute_profile_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              profileUpdateManyWithWhereWithoutInstitute_profile_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                profileUpdateManyWithWhereWithoutInstitute_profile_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => profileScalarWhereInputObjectSchema),
          z.lazy(() => profileScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const profileUncheckedUpdateManyWithoutInstitute_profile_instituteToinstituteNestedInputObjectSchema =
  Schema
