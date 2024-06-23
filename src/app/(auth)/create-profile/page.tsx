import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

import { NewProfile } from "./components/new-profile"

export default async function CreateProfile() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
  })
  if (profile) return redirect("/dashboard")
  return (
    <div className="w-full min-h-screen py-12 px-6 flex justify-center items-center flex-col">
      <NewProfile />
    </div>
  )
}
