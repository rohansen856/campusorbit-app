import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutMess_mess_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateOrConnectWithoutMess_mess_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => instituteWhereUniqueInputObjectSchema),
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

export const instituteCreateOrConnectWithoutMess_mess_instituteToinstituteInputObjectSchema =
  Schema
