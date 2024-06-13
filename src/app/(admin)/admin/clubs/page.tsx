import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { NoAdminAccess } from "@/components/no-admin-access"
import { StillBuilding } from "@/components/still-building"

export default async function MessAdmin() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  const hasAccess = await db.admins.findFirst({
    where: {
      user_id: user.id,
      route: "/clubs",
    },
  })
  if (!hasAccess) return <NoAdminAccess route="/clubs" />

  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
    select: {
      institute: true,
    },
  })

  if (!profile) return "You dont have a profile!"

  return <StillBuilding />
}
