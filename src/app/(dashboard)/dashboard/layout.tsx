import Link from "next/link"
import { redirect } from "next/navigation"
import { BellIcon, Download, Rabbit } from "lucide-react"

import { getCurrentUser } from "@/lib/session"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MobileSidebar } from "@/components/shared/mobile-nav"
import { SiteFooter } from "@/components/shared/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"

import Sidebar from "../../../components/shared/side-bar"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <div className="grid h-screen w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <MobileSidebar />
          <Icons.logo className="hidden size-8 md:block" />
          <h1 className="text-xl font-semibold">CampusOrbit</h1>

          <div className="ml-auto mr-4 flex items-center gap-4">
            <Link
              href={"/dashboard/mails"}
              className="flex size-8 cursor-pointer rounded-full bg-secondary"
            >
              <BellIcon className="m-auto size-4" />
            </Link>
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
            <Button
              variant="outline"
              size="sm"
              className="hidden gap-1.5 text-sm md:flex"
            >
              <Download className="size-3.5" />
              Download
            </Button>
          </div>
        </header>
        <main className="flex flex-1 gap-2 p-2">
          <Sidebar />
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
