import { z } from "zod"

export const AccountScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "institute",
  "created_at",
  "access_level",
  "password",
])
