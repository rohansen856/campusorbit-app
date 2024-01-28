export type UserSchema = {
    roll: number | null
    email: string | null
    id: string
    createdAt: string | null
    username: string | null
    fullName: string | null
    branch: string | null
    sem: number | null
    mess: number | null
    year: number | null
    visibility: boolean | null
}

export type RoutineSchema = {
    code: string | null
    type: string | null
    id: string
    prof: string | null
    from: number | null
    to: number | null
    day: number | null
    sem: number | null
    branch: string | null
    room: string | null
}

export type ModificationsSchema = {
    status: string | null
    createdAt: string
    classId: string
    id: string
}
