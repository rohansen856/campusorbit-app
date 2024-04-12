import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import { ImageUploader } from "./components/image-upload"
import { UserForm } from "./components/user-form"

export const metadata = {
  title: "Settings",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <div className="flex h-full flex-col items-center">
      <div className="grid place-items-center">
        <div className="mb-6">
          <Avatar className="mb-3 size-36">
            <AvatarImage
              src={`https://utfs.io/f/${user.image}`}
              alt="user"
              className="bg-secondary object-cover"
            />
            <AvatarFallback>
              <Icons.spinner className="animate-spin" />
            </AvatarFallback>
          </Avatar>
          <ImageUploader />
        </div>
        <UserForm user={user} />
      </div>
    </div>
  )
}
