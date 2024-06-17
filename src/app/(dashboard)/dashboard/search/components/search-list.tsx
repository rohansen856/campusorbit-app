import { useEffect, useState } from "react"
import { useUserSearch } from "@/states/user-search-state"
import { Profile } from "@prisma/client"
import axios from "axios"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"

import { SearchFilter } from "./search-filter"

export function SearchList() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [selected, setSelected] = useUserSearch()

  async function getProfiles() {
    try {
      const data = await axios.get("/api/users")
      if (data.status !== 200)
        return toast({
          title: "Error getting users!",
          variant: "destructive",
        })
      setProfiles(data.data)
    } catch (error) {
      setProfiles([])
      return toast({
        title: "Error getting users!",
        variant: "destructive",
      })
    }
  }
  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <div className="flex min-w-[350px] flex-1 flex-col gap-2">
      <SearchFilter setProfiles={setProfiles} />
      {profiles.map((profile) => (
        <div
          className="flex w-full cursor-pointer items-center rounded border p-2 hover:bg-secondary"
          key={profile.id}
          onClick={() => {
            setSelected({ profile: profile })
          }}
        >
          <Avatar className="bg-secondary">
            <AvatarImage
              src={profile.image ?? "https://github.com/shadcn.png"}
              alt={profile.username ?? "c0"}
              className="object-contain"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="text-md">{profile.full_name}</p>
            <p className="text-sm text-muted-foreground">@{profile.username}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
