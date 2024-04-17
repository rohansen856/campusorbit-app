import Link from "next/link"
import { redirect } from "next/navigation"

import { overviewConfig } from "@/config/overview"
import { getCurrentAdmin } from "@/lib/session"
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
  const user = await getCurrentAdmin()
  if (!user) return redirect("/login")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={overviewConfig.mainNav} />
          <nav>
            <Link
              href="/download"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              download
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
