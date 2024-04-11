import Link from "next/link"
import { redirect } from "next/navigation"

import { overviewConfig } from "@/config/overview"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/shared/main-nav"
import { SiteFooter } from "@/components/shared/site-footer"

interface OverviewLayoutProps {
  children: React.ReactNode
}

export default async function OverviewLayout({
  children,
}: OverviewLayoutProps) {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
