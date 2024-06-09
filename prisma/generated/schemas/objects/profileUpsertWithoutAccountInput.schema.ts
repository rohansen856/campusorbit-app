import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateWithoutAccountInputObjectSchema } from "./profileCreateWithoutAccountInput.schema"
import { profileUncheckedCreateWithoutAccountInputObjectSchema } from "./profileUncheckedCreateWithoutAccountInput.schema"
import { profileUncheckedUpdateWithoutAccountInputObjectSchema } from "./profileUncheckedUpdateWithoutAccountInput.schema"
import { profileUpdateWithoutAccountInputObjectSchema } from "./profileUpdateWithoutAccountInput.schema"

const Schema: z.ZodType<Prisma.profileUpsertWithoutAccountInput> = z
  .object({
    update: z.union([
      z.lazy(() => profileUpdateWithoutAccountInputObjectSchema),
      z.lazy(() => profileUncheckedUpdateWithoutAccountInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => profileCreateWithoutAccountInputObjectSchema),
      z.lazy(() => profileUncheckedCreateWithoutAccountInputObjectSchema),
    ]),
  })
  .strict()

export const profileUpsertWithoutAccountInputObjectSchema = Schema
