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

export function UsersTable({ users }) {
  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div
          id={user.id}
          className="flex items-center rounded p-3 hover:bg-muted"
        >
          <Avatar className="size-9">
            <AvatarImage src="/favicon.ico" alt="Avatar" />
            <AvatarFallback>{user.roll}</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex w-full flex-col items-start justify-between gap-y-1 md:flex-row md:items-center">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.fullName || "--------"}
              </p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="space-x-1 font-medium">
              <span className="rounded bg-muted p-2">{user.institute}</span>
              <span className="rounded bg-muted p-2">
                Branch: {user.branch}
              </span>
              <span className="rounded bg-muted p-2">
                Year: {user.year || 0}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
