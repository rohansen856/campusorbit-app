import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { db } from "@/lib/db"
import { routine } from "@/lib/schema"
import { DataTableDemo } from "@/components/routine-table"
import { RoutineSchema } from "@/types"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

async function getRoutine(): Promise<RoutineSchema[]> {
    const data = await db.select().from(routine)
    return data
}
// Simulate a database read for tasks.
async function getTasks() {}

export default async function TaskPage() {
    const routine = await getRoutine()

    return (
        <>
            <div className="p-5">
                <DataTableDemo routine={routine}/>
            </div>
        </>
    )
}
