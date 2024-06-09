import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUncheckedUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedUpdateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUpdateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messWhereUniqueInputObjectSchema } from "./messWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.messUpsertWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => messWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            messUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            messUncheckedUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const messUpsertWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema =
  Schema
