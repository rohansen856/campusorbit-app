import { z } from "zod"

export const RoutineScalarFieldEnumSchema = z.enum([
  "id",
  "course_id",
  "course_code",
  "course_title",
  "prof",
  "type",
  "day",
  "from",
  "to",
  "group",
  "branch",
  "institute",
  "room",
  "semester",
  "compulsory",
])
