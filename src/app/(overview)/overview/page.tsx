import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"
import { admin, profiles } from "drizzle/migrations/schema"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Icons } from "@/components/icons"

import { InputOTPForm } from "./components/otp-form"

export default async function AdminLogin() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")

  const permissions = await db.select().from(admin).where(eq(admin.id, user.id))

  if (permissions.length <= 0)
    return (
      <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6 lg:flex-row">
        <h2 className="font-heading text-lg md:text-2xl 2xl:text-4xl">
          You have no admin privileges
        </h2>
      </div>
    )

  const permission = permissions[0]

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-6">
      <div className="wrap flex w-full items-center justify-center gap-2 font-heading text-lg md:text-xl 2xl:text-3xl">
        <span className="rounded-lg border p-2">
          Privilege: {permission.type}
        </span>
        <span className="rounded-lg border p-2">
          Authority: {permission.author}
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
        <div className="size-48 p-2">
          <Icons.logo className="size-full" />
        </div>
        <InputOTPForm />
      </div>
    </div>
  )
}
