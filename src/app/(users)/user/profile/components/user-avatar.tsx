"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"

interface UserImageFieldProps {
  image: string | null
}

export function UserImageField({ image }: UserImageFieldProps) {
  return (
    <div>
      <Avatar className="size-36">
        <AvatarImage
          src={`https://utfs.io/f/${image}`}
          alt="user"
          className="object-cover"
        />
        <AvatarFallback>
          <Icons.spinner className="animate-spin" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
