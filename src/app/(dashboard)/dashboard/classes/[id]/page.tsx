import { notFound, redirect } from "next/navigation"
import { Routine } from "@prisma/client"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { weekDays } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

import { OccuranceTable } from "./components/occurance-table"

async function getClassDetails(routineId: Routine["id"]) {
  return await db.routine.findFirst({
    where: {
      id: routineId,
    },
  })
}

interface EditorPageProps {
  params: { id: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const routine = await getClassDetails(params.id)

  if (!routine) {
    notFound()
  }

  const allOccurances = await db.routine.findMany({
    where: {
      course_id: routine.course_id,
    },
    select: {
      class_type: true,
      day: true,
      from: true,
      to: true,
    },
  })

  // await getDetail()

  return (
    <div className="w-full flex flex-col">
      <div className="border-b py-12 px-16">
        <h3 className="border-b pb-6 font-heading text-lg lg:text-2xl 2xl:text-4xl">
          {routine.course_title}
        </h3>
        <div className="flex py-6">
          <div>
            <h5 className="text-primary/50">Course Code</h5>
            <h3 className="font-heading text-lg lg:text-xl 2xl:text-2xl flex">
              {routine.course_code}
              <Badge className="bg-green-500/50 my-auto mx-2 pt-1">
                {routine.class_type}
              </Badge>
            </h3>
          </div>
          <div className="ml-12">
            <h5 className="text-primary/50">Professor</h5>
            <h3 className="font-heading text-lg lg:text-xl 2xl:text-2xl">
              {routine.prof}
            </h3>
          </div>
          <div className="ml-12">
            <h5 className="text-primary/50">Type</h5>
            <h3 className="font-heading text-lg lg:text-xl 2xl:text-2xl">
              {routine.compulsory ? "Compulsory" : "Elective"}
            </h3>
          </div>
          <div className="ml-auto">
            <h5 className="text-primary/50">Timing</h5>
            <h3 className="font-heading text-lg lg:text-xl 2xl:text-2xl">
              <span>{weekDays[routine.day]},</span>{" "}
              <span>
                {new Date(routine.from).getHours()}:00 -{" "}
                {new Date(routine.to).getHours()}:00
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <OccuranceTable occurances={allOccurances} />
      </div>
    </div>
  )
}
