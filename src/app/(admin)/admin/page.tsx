import Link from "next/link"
import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { buttonVariants } from "@/components/ui/button"
import { NoAdminAccess } from "@/components/no-admin-access"

export default async function AdminWelcome() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  const adminAccess = await db.admins.findMany({
    where: {
      user_id: user.id,
    },
  })
  if (adminAccess.length === 0) return <NoAdminAccess />
  return (
    <div className="flex h-[80vh] w-full flex-col items-center gap-4 p-6 pt-16">
      <h2 className="mb-16 text-lg font-bold lg:text-2xl 2xl:text-4xl">
        Hello Admin!
      </h2>
      <p>access the routes:</p>
      <div className="flex gap-4">
        {adminAccess.map((access) => (
          <Link
            href={`/admin/${access.route}`}
            className={buttonVariants({ variant: "secondary" })}
          >
            {access.route}
          </Link>
        ))}
      </div>
    </div>
  )
}
