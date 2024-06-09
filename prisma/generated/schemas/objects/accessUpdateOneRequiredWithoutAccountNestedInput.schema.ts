import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { accessCreateOrConnectWithoutAccountInputObjectSchema } from "./accessCreateOrConnectWithoutAccountInput.schema"
import { accessCreateWithoutAccountInputObjectSchema } from "./accessCreateWithoutAccountInput.schema"
import { accessUncheckedCreateWithoutAccountInputObjectSchema } from "./accessUncheckedCreateWithoutAccountInput.schema"
import { accessUncheckedUpdateWithoutAccountInputObjectSchema } from "./accessUncheckedUpdateWithoutAccountInput.schema"
import { accessUpdateWithoutAccountInputObjectSchema } from "./accessUpdateWithoutAccountInput.schema"
import { accessUpsertWithoutAccountInputObjectSchema } from "./accessUpsertWithoutAccountInput.schema"
import { accessWhereUniqueInputObjectSchema } from "./accessWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.accessUpdateOneRequiredWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => accessCreateWithoutAccountInputObjectSchema),
          z.lazy(() => accessUncheckedCreateWithoutAccountInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => accessCreateOrConnectWithoutAccountInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => accessUpsertWithoutAccountInputObjectSchema)
        .optional(),
      connect: z.lazy(() => accessWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => accessUpdateWithoutAccountInputObjectSchema),
          z.lazy(() => accessUncheckedUpdateWithoutAccountInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const accessUpdateOneRequiredWithoutAccountNestedInputObjectSchema =
  Schema
