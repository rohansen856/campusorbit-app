import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

import { DetailsForm } from "./components/details-form"
import { FullNameForm } from "./components/full-name-form"
import { UploadImageForm } from "./components/image-upload"
import { UserNameForm } from "./components/user-name-form"

export const metadata = {
  title: "Settings",
  description: "Manage account and profile settings.",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
  })

  if (!profile) "your profile has not been created yet!"

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="flex size-full max-w-lg flex-col gap-2">
        <UploadImageForm image={profile?.image} username={profile?.username} />
        <DetailsForm profile={profile} />
      </div>
    </DashboardShell>
  )
}
