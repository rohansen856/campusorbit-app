"use client"

import { useEffect } from "react"
import { useUserSearch } from "@/states/user-search-state"
import { Profile } from "@prisma/client"

import { SearchList } from "./search-list"
import { UserCard } from "./user-card"

interface SearchGridProps extends React.HTMLAttributes<HTMLDivElement> {
  profile: Profile
}

export function SearchGrid({ ...props }: SearchGridProps) {
  const [{ profile }, setProfile] = useUserSearch()
  useEffect(() => {
    setProfile({ profile: props.profile })
  }, [props.profile])

  return (
    <div className="flex w-full flex-wrap gap-4">
      <UserCard profile={profile} />
      <SearchList />
      {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
    </div>
  )
}
