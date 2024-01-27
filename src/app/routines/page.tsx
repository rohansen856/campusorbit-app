import { Metadata } from "next"
import { RoutineSchema } from "@/types"

import { db } from "@/lib/db"
import { routine } from "@/lib/schema"
import { DataTableDemo } from "@/components/routine-table"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

async function getRoutine(): Promise<RoutineSchema[]> {
    const data = await db.select().from(routine)
    return data
}

export default async function RoutinePage() {
    const routine = await getRoutine()

    return (
        <>
            <div className="p-5">
                <DataTableDemo routine={routine} />
            </div>
        </>
    )
}
