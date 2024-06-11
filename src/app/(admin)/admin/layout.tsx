import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/shared/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"

import Sidebar from "./components/admin-sidebar"
import { AdminSidebarPadding } from "./components/admin-sidebar-padding"

interface AdminLayoutProps {
  children?: React.ReactNode
}

export const metadata = {
  title: "Admin",
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  const accessLevel = await db.account.findUnique({
    where: {
      id: user.id,
    },
    select: {
      access_level: true,
    },
  })
  return (
    <div className="relative flex h-full overflow-hidden bg-background">
      <AdminSidebarPadding />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex items-center gap-1 border-b bg-background p-3">
          <h1 className="text-xl font-semibold">CampusOrbit</h1>

          <div className="ml-auto mr-4 flex items-center gap-4">
            <Badge variant="secondary">
              access level: {accessLevel?.access_level}
            </Badge>
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
          </div>
        </header>
        <main
          id="content"
          className={`h-full overflow-x-hidden p-2 pt-16 md:overflow-y-hidden md:pt-0`}
        >
          {children}

          <SiteFooter />
        </main>
      </div>
      <Sidebar />
    </div>
  )
}
