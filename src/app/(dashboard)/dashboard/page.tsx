import { Suspense } from "react"
import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { sleep } from "@/lib/utils"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

import { Electives } from "./components/electives"
import { Logo3d } from "./components/logo-3d"
import { MessToday } from "./components/mess-today"
import { RoutineToday } from "./components/routine-today"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex w-full">
      <DashboardShell className="z-10">
        <DashboardHeader
          heading="Dashboard"
          text="Your profile info"
        ></DashboardHeader>
        <div>
          <div>
            <h3 className="text-md mb-4 lg:text-lg 2xl:text-xl">
              Today&apos; classes:
            </h3>
            <Suspense>
              <RoutineToday />
            </Suspense>
          </div>
          <div>
            <h3 className="text-md mb-4 lg:text-lg 2xl:text-xl">
              Your electives:
            </h3>
            <Suspense>
              <Electives />
            </Suspense>
          </div>
          <div>
            <h3 className="text-md mb-4 lg:text-lg 2xl:text-xl">
              Today&apos; Mess menu:
            </h3>
            <Suspense>
              <MessToday />
            </Suspense>
          </div>
        </div>
      </DashboardShell>
      <div className="max-w-lg max-h-[90vh] flex-1 z-0 overflow-visible opacity-70">
        <Suspense>
          <Logo3d />
        </Suspense>
      </div>
    </div>
  )
}
