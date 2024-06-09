import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accountScalarWhereInputObjectSchema } from "./accountScalarWhereInput.schema"
import { accountUncheckedUpdateManyWithoutAccount_account_instituteToinstituteInputObjectSchema } from "./accountUncheckedUpdateManyWithoutAccount_account_instituteToinstituteInput.schema"
import { accountUpdateManyMutationInputObjectSchema } from "./accountUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.accountUpdateManyWithWhereWithoutInstitute_account_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => accountScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => accountUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            accountUncheckedUpdateManyWithoutAccount_account_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const accountUpdateManyWithWhereWithoutInstitute_account_instituteToinstituteInputObjectSchema =
  Schema
