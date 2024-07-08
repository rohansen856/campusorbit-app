"use client"

import { UploadButton } from "@/lib/uploadthing"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UploadImageFormProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string | null
  username?: string | null
}

export function UploadImageForm({
  image,
  username,
  ...props
}: UploadImageFormProps) {
  return (
    <section
      className="flex w-full flex-col items-center justify-between rounded-lg border p-4 max-w-lg"
      {...props}
    >
      <Avatar className="size-32 bg-secondary">
        <AvatarImage
          src={image || "/logo.png"}
          alt={username || "@campusorbit"}
          className="object-contain"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res)
          alert("Upload Completed")
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`)
        }}
      />
    </section>
  )
}
