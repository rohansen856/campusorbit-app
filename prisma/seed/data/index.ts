import { account } from "./account"
import { admins } from "./admins"
import { analytics } from "./analytics"
import { clubs } from "./clubs"
import { courses } from "./courses"
import { institute } from "./institutes"
import { mess } from "./mess"
import { profile } from "./profile"
import { routine } from "./routine"
import { routine_changes } from "./routine_changes"

enum Tables {
  "account",
  "admins",
  "analytics",
  "clubs",
  "courses",
  "institute",
  "mess",
  "profile",
  "routine",
  "routine_changes",
}

export const demiData = {
  account,
  admins,
  analytics,
  clubs,
  courses,
  institute,
  mess,
  profile,
  routine,
  routine_changes,
}
