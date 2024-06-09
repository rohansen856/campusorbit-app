import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { profileCreateOrConnectWithoutAccountInputObjectSchema } from "./profileCreateOrConnectWithoutAccountInput.schema"
import { profileCreateWithoutAccountInputObjectSchema } from "./profileCreateWithoutAccountInput.schema"
import { profileUncheckedCreateWithoutAccountInputObjectSchema } from "./profileUncheckedCreateWithoutAccountInput.schema"
import { profileUncheckedUpdateWithoutAccountInputObjectSchema } from "./profileUncheckedUpdateWithoutAccountInput.schema"
import { profileUpdateWithoutAccountInputObjectSchema } from "./profileUpdateWithoutAccountInput.schema"
import { profileUpsertWithoutAccountInputObjectSchema } from "./profileUpsertWithoutAccountInput.schema"
import { profileWhereUniqueInputObjectSchema } from "./profileWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.profileUpdateOneWithoutAccountNestedInput> = z
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
    upsert: z
      .lazy(() => profileUpsertWithoutAccountInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => profileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => profileUpdateWithoutAccountInputObjectSchema),
        z.lazy(() => profileUncheckedUpdateWithoutAccountInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const profileUpdateOneWithoutAccountNestedInputObjectSchema = Schema
