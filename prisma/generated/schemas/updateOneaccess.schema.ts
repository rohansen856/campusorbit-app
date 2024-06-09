import { z } from "zod"

import { accessUncheckedUpdateInputObjectSchema } from "./objects/accessUncheckedUpdateInput.schema"
import { accessUpdateInputObjectSchema } from "./objects/accessUpdateInput.schema"
import { accessWhereUniqueInputObjectSchema } from "./objects/accessWhereUniqueInput.schema"

export const accessUpdateOneSchema = z.object({
  data: z.union([
    accessUpdateInputObjectSchema,
    accessUncheckedUpdateInputObjectSchema,
  ]),
  where: accessWhereUniqueInputObjectSchema,
})
