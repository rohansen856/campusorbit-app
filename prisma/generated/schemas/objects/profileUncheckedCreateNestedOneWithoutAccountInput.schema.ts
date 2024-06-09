import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutAccountInputObjectSchema } from "./profileCreateOrConnectWithoutAccountInput.schema"
import { profileCreateWithoutAccountInputObjectSchema } from "./profileCreateWithoutAccountInput.schema"
import { profileUncheckedCreateWithoutAccountInputObjectSchema } from "./profileUncheckedCreateWithoutAccountInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUncheckedCreateNestedOneWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => profileCreateWithoutAccountInputObjectSchema),
          z.lazy(() => profileUncheckedCreateWithoutAccountInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => profileCreateOrConnectWithoutAccountInputObjectSchema)
        .optional(),
      connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const profileUncheckedCreateNestedOneWithoutAccountInputObjectSchema =
  Schema
