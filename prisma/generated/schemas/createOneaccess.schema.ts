import { z } from "zod"

import { accessCreateInputObjectSchema } from "./objects/accessCreateInput.schema"
import { accessUncheckedCreateInputObjectSchema } from "./objects/accessUncheckedCreateInput.schema"

export const accessCreateOneSchema = z.object({
  data: z.union([
    accessCreateInputObjectSchema,
    accessUncheckedCreateInputObjectSchema,
  ]),
})
