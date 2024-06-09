import { z } from "zod"

import { accessCreateInputObjectSchema } from "./objects/accessCreateInput.schema"
import { accessUncheckedCreateInputObjectSchema } from "./objects/accessUncheckedCreateInput.schema"
import { accessUncheckedUpdateInputObjectSchema } from "./objects/accessUncheckedUpdateInput.schema"
import { accessUpdateInputObjectSchema } from "./objects/accessUpdateInput.schema"
import { accessWhereUniqueInputObjectSchema } from "./objects/accessWhereUniqueInput.schema"

export const accessUpsertSchema = z.object({
  where: accessWhereUniqueInputObjectSchema,
  create: z.union([
    accessCreateInputObjectSchema,
    accessUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    accessUpdateInputObjectSchema,
    accessUncheckedUpdateInputObjectSchema,
  ]),
})
