import { redirect } from "next/navigation"
import { UserSchema } from "@/types"

import { getCurrentUser } from "@/lib/session"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    return redirect("/login")
  }

  return <div className="h-full bg-secondary">{user.id}</div>
}
