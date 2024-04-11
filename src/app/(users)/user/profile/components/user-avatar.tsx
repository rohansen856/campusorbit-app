"use client"

import { Edit } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"

interface UserImageFieldProps {
  image: string | null
}

export function UserImageField({ image }: UserImageFieldProps) {
  return (
    <Avatar className="size-36">
      <AvatarImage src="/images/avatars/shadcn.png" alt="@shadcn" />
      <AvatarFallback>
        <Icons.spinner className="animate-spin" />
      </AvatarFallback>
    </Avatar>
  )
}
