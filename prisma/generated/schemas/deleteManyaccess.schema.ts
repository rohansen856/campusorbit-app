import { z } from "zod"

import { accessWhereInputObjectSchema } from "./objects/accessWhereInput.schema"

export const accessDeleteManySchema = z.object({
  where: accessWhereInputObjectSchema.optional(),
})
