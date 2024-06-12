import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

import { MenuTable } from "./components/menu-table"

export default async function MessAdmin() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
    select: {
      institute: true,
    },
  })

  if (!profile) return "You dont have a profile!"

  const messToday = await db.mess.findMany({
    where: {
      institute: profile?.institute,
      day: new Date().getDay(),
    },
  })

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <MenuTable menu={messToday} />
    </div>
  )
}
