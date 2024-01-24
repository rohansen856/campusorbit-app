import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type UserSchema = {
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

export function UsersTable({ users }: { users: UserSchema[] }) {
    return (
        <div className="space-y-2">
            {users.map((user) => (
                <div className="flex items-center rounded p-3 hover:bg-muted">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>{user.roll}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user.fullName || "--------"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                    <div className="ml-auto space-x-1 font-medium">
                        <span className="rounded bg-muted p-2">
                            Branch: {user.branch}
                        </span>
                        <span className="rounded bg-muted p-2">
                            Year: {24 - (user.year || 0)}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
