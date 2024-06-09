import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateNestedOneWithoutMess_mess_instituteToinstituteInput> =
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
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const instituteCreateNestedOneWithoutMess_mess_instituteToinstituteInputObjectSchema =
  Schema
