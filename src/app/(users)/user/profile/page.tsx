import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { profile } from "@/lib/schema"
import { getCurrentUser } from "@/lib/session"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import { IdCard } from "./components/id_card"
import { UserImageField } from "./components/user-avatar"
import { UserNameField } from "./components/username"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    return redirect("/login")
  }

  const userProfile = (
    await db.select().from(profile).where(eq(profile.id, user.id))
  )[0]

  return (
    <div className="flex h-full flex-col items-center">
      <div className="grid place-items-center">
        <UserImageField image={userProfile.image} />
        <UserNameField username={userProfile.username} />
        <div className="rounded-md bg-secondary p-2">
          {user.email ?? <Icons.spinner className="animate-spin" />}
        </div>
      </div>
      <div className="mt-6">
        <IdCard image={userProfile.image} />
      </div>
    </div>
  )
}
