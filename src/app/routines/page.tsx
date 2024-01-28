import { Metadata } from "next"
import { ModificationsSchema, RoutineSchema } from "@/types"

import { db } from "@/lib/db"
import { routine, routineModifications } from "@/lib/schema"
import { DataTableDemo } from "@/components/routine-table"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

async function getRoutine(): Promise<RoutineSchema[]> {
    const data = await db.select().from(routine)
    return data
}
async function getModifications(): Promise<ModificationsSchema[]> {
    const data = await db.select().from(routineModifications)
    return data
}

export default async function RoutinePage() {
    const routine = await getRoutine()
    const modifications = await getModifications()

    return (
        <>
            <div className="p-5">
                <DataTableDemo routine={routine} mods={modifications} />
            </div>
        </>
    )
}
