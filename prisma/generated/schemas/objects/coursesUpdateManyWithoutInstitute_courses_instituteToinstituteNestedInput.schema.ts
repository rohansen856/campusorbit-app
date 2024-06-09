import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelopeObjectSchema } from "./coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelope.schema"
import { coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesScalarWhereInputObjectSchema } from "./coursesScalarWhereInput.schema"
import { coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUpdateManyWithWhereWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUpdateManyWithWhereWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUpdateWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUpdateWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUpsertWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUpsertWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesUpdateManyWithoutInstitute_courses_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              coursesUpsertWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesUpsertWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => coursesWhereUniqueInputObjectSchema),
          z.lazy(() => coursesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => coursesWhereUniqueInputObjectSchema),
          z.lazy(() => coursesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => coursesWhereUniqueInputObjectSchema),
          z.lazy(() => coursesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => coursesWhereUniqueInputObjectSchema),
          z.lazy(() => coursesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              coursesUpdateWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesUpdateWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              coursesUpdateManyWithWhereWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesUpdateManyWithWhereWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => coursesScalarWhereInputObjectSchema),
          z.lazy(() => coursesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const coursesUpdateManyWithoutInstitute_courses_instituteToinstituteNestedInputObjectSchema =
  Schema
