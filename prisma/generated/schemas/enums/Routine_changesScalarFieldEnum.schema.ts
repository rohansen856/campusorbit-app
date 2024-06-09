import { z } from "zod"

export const Routine_changesScalarFieldEnumSchema = z.enum([
  "id",
  "created_at",
  "created_by",
  "date",
  "description",
  "routine_id",
])
