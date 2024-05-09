import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { access, profile } from "@/lib/schema"
import { getCurrentUser } from "@/lib/session"
import { Icons } from "@/components/icons"

import { InputOTPForm } from "./components/otp-form"

export default async function AdminLogin() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")

  const permissions = await db
    .select()
    .from(access)
    .where(eq(access.level, user.accessLevel))

  if (permissions.length < 1)
    return (
      <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6 lg:flex-row">
        <h2 className="font-heading text-lg md:text-2xl 2xl:text-4xl">
          You have no admin privileges
        </h2>
      </div>
    )

  const permission = permissions[0]

  if (permission.level === 2) return redirect("/overview/routine")
  else if (permission.level === 3) return redirect("/overview/club")
  else if (permission.level === 10) return redirect("/overview/analytics")

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6">
      <div className="wrap flex w-full items-center justify-center gap-2 font-heading text-lg md:text-xl 2xl:text-3xl">
        <span className="rounded-lg border p-2">
          Privilege: {permission.details}
        </span>
        <span className="rounded-lg border p-2">
          Authority: {permission.domain}
        </span>
      </div>
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-6 text-2xl lg:flex-row">
        <Icons.warning className="text-yellow-600" />
        {permission.level === 1 && "You do not have any admin privileges"}
      </div>
    </div>
  )
}
