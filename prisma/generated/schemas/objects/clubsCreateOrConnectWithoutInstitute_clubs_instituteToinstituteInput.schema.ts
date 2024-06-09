import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema } from "./clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInput.schema"
import { clubsWhereUniqueInputObjectSchema } from "./clubsWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => clubsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            clubsCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            clubsUncheckedCreateWithoutInstitute_clubs_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const clubsCreateOrConnectWithoutInstitute_clubs_instituteToinstituteInputObjectSchema =
  Schema
