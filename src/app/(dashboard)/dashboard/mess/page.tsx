import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Icons } from "@/components/icons"

import { MessGrid } from "./components/mess-grid"

export const metadata = {
  title: "Mess",
}

export default async function Mess() {
  const user = await getCurrentUser()
  if (!user) redirect("/login")
  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
    select: {
      institute: true,
      mess: true,
    },
  })
  if (!profile?.mess) return "Please select your mess from settings"

  const messMenu = await db.mess.findMany({
    where: {
      institute: profile.institute,
      mess_no: profile.mess,
    },
  })

  return (
    <div className="flex flex-row overflow-x-auto">
      <div>
        <div className="mb-2 flex max-w-lg gap-2 rounded bg-green-600 p-2">
          <Icons.check /> Mess {profile.mess} menu
        </div>
        <MessGrid menu={messMenu} active={profile?.mess} />
      </div>
    </div>
  )
}
