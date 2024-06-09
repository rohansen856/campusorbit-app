import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messUncheckedUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedUpdateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema } from "./messUpdateWithoutInstitute_mess_instituteToinstituteInput.schema"
import { messWhereUniqueInputObjectSchema } from "./messWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.messUpdateWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => messWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            messUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            messUncheckedUpdateWithoutInstitute_mess_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const messUpdateWithWhereUniqueWithoutInstitute_mess_instituteToinstituteInputObjectSchema =
  Schema
