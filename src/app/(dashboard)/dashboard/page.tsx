import { Suspense } from "react"
import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { sleep } from "@/lib/utils"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

import { BorderBeam } from "./components/border-beam"
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
      <div className="w-full flex flex-col gap-6">
        <div className="relative p-4 mx-auto flex flex-col justify-center items-center rounded-lg border w-full">
          <h2 className="font-heading text-lg lg:text-2xl 2xl:text-4xl mb-4">
            Class Schedule
          </h2>
          <Suspense>
            <RoutineToday />
          </Suspense>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <div className="relative p-4 mx-auto flex flex-col justify-center items-center rounded-lg border w-full">
          <h2 className="font-heading text-lg lg:text-2xl 2xl:text-4xl mb-4">
            Electives
          </h2>
          <Suspense>
            <Electives />
          </Suspense>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <div className="relative p-4 mx-auto flex flex-col justify-center items-center rounded-lg border w-full">
          <h2 className="font-heading text-lg lg:text-2xl 2xl:text-4xl mb-4">
            Mess Menu
          </h2>
          <Suspense>
            <MessToday />
          </Suspense>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </div>
      {/* <div className="max-w-lg max-h-[90vh] flex-1 z-0 overflow-visible opacity-70">
        <Suspense>
          <Logo3d />
        </Suspense>
      </div> */}
    </div>
  )
}
