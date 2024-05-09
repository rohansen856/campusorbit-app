import Link from "next/link"
import { redirect } from "next/navigation"

import { overviewConfig } from "@/config/overview"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/shared/main-nav"

interface OverviewLayoutProps {
  children: React.ReactNode
}

export default async function OverviewLayout({
  children,
}: OverviewLayoutProps) {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  if (user.accessLevel !== 2) return redirect("/user/profile")

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
