import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { StillBuilding } from "@/components/still-building"

import { SearchGrid } from "./components/search-grid"

export default async function SearchPage() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")

  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
  })

  if (!profile) return "You dont have a profile!"
  return <SearchGrid profile={profile} />
}
