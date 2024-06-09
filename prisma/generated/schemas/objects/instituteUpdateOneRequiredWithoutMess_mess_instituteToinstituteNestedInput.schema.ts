import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUpsertWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUpsertWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteUpdateOneRequiredWithoutMess_mess_instituteToinstituteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              instituteCreateWithoutMess_mess_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            instituteCreateOrConnectWithoutMess_mess_instituteToinstituteInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            instituteUpsertWithoutMess_mess_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              instituteUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedUpdateWithoutMess_mess_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const instituteUpdateOneRequiredWithoutMess_mess_instituteToinstituteNestedInputObjectSchema =
  Schema
