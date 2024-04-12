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
        {image && image.length > 5 ? (
          <AvatarImage
            src={`https://utfs.io/f/${image}`}
            alt="user"
            className="bg-secondary object-cover"
          />
        ) : (
          <AvatarFallback>
            <Icons.logo className="size-2/3" />
          </AvatarFallback>
        )}
      </Avatar>
    </div>
  )
}
