import { z } from "zod"

export const MessScalarFieldEnumSchema = z.enum([
  "id",
  "mess_no",
  "day",
  "breakfast",
  "lunch",
  "dinner",
  "institute",
])
