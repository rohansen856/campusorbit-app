import { z } from "zod"

import { accessCreateManyInputObjectSchema } from "./objects/accessCreateManyInput.schema"

export const accessCreateManySchema = z.object({
  data: z.union([
    accessCreateManyInputObjectSchema,
    z.array(accessCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
