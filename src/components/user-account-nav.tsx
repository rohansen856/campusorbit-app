"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user-avatar"

import { toast } from "./ui/use-toast"

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: {
    username: string | null
    email: string
    id: string
  }
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  const router = useRouter()
  async function signOut() {
    try {
      const res = await axios.delete("/api/auth")
      router.push("/login")
    } catch (error) {
      toast({
        title: "Error Logging Out",
        description: "A server side error has occured. please try again later",
        variant: "destructive",
      })
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: user.username || null, image: user.username || null }}
          className="size-8"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.username && <p className="font-medium">{user.username}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/user/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/user/profile/routine">Routine</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/user/profile/notifications">Notifications</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/user/profile/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onSelect={signOut}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
