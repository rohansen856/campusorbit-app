import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelopeObjectSchema } from "./clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelope.schema"
import { clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsUncheckedCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            clubsCreateManyInstitute_clubs_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => clubsWhereUniqueInputObjectSchema),
          z.lazy(() => clubsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const clubsUncheckedCreateNestedManyWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
