import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { messScalarWhereInputObjectSchema } from "./messScalarWhereInput.schema"
import { messUncheckedUpdateManyWithoutMess_mess_instituteToinstituteInputObjectSchema } from "./messUncheckedUpdateManyWithoutMess_mess_instituteToinstituteInput.schema"
import { messUpdateManyMutationInputObjectSchema } from "./messUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.messUpdateManyWithWhereWithoutInstitute_mess_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => messScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => messUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            messUncheckedUpdateManyWithoutMess_mess_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const messUpdateManyWithWhereWithoutInstitute_mess_instituteToinstituteInputObjectSchema =
  Schema
