import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutMess_mess_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUpsertWithoutMess_mess_instituteToinstituteInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            instituteUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            instituteCreateWithoutMess_mess_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const instituteUpsertWithoutMess_mess_instituteToinstituteInputObjectSchema =
  Schema
