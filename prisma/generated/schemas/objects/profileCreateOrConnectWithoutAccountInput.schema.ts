import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutAccountInputObjectSchema } from "./profileCreateWithoutAccountInput.schema"
import { profileUncheckedCreateWithoutAccountInputObjectSchema } from "./profileUncheckedCreateWithoutAccountInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileCreateOrConnectWithoutAccountInput> = z
  .object({
    where: z.lazy(() => profileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => profileCreateWithoutAccountInputObjectSchema),
      z.lazy(() => profileUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const profileCreateOrConnectWithoutAccountInputObjectSchema = Schema
