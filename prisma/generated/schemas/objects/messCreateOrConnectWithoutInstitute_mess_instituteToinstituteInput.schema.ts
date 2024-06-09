import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedCreateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messWhereUniqueInputObjectSchema } from "./messWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => messWhereUniqueInputObjectSchema),
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

export const messCreateOrConnectWithoutInstitute_mess_instituteToinstituteInputObjectSchema =
  Schema
