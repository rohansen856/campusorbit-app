import { z } from "zod"

export const ProfileScalarFieldEnumSchema = z.enum([
  "id",
  "username",
  "full_name",
  "image",
  "semester",
  "branch",
  "group",
  "programme",
  "year",
  "institute",
  "visibility",
  "mess",
  "electives",
])
