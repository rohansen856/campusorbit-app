import { redirect } from "next/navigation"
import axios from "axios"

import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

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

  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: "desc",
  //   },
  // })

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Your profile info"
      ></DashboardHeader>
      <div>
        <p>Today&apos; classes:</p>
        <RoutineToday />
      </div>
      <div>
        <p>Today&apos; mess menu:</p>
        <MessToday />
      </div>
    </DashboardShell>
  )
}
