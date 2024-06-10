import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

import { ClubsRow } from "./components/clubs-row"

export default async function ClubsPage() {
  const user = await getCurrentUser()
  const profile = await db.profile.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      institute: true,
    },
  })

  if (!profile)
    return (
      <i className="text-destructive-foreground">
        we could not get your profile!
      </i>
    )

  const clubs = await db.clubs.findMany({
    where: {
      institute: profile.institute,
    },
  })

  return (
    <div className="w-full space-y-4 overflow-x-auto">
      <ClubsRow
        title="All Clubs"
        subtitle="jhhjhvhgvh"
        clubs={[...clubs, ...clubs, ...clubs, ...clubs, ...clubs]}
      />
      <ClubsRow title="Your Club" subtitle="jhhjhvhhhj" clubs={[]} />
      <ClubsRow
        title="Cultural"
        subtitle="jhhjhvhgvh"
        clubs={[...clubs.filter((club) => club.type === "cultural")]}
      />
      <ClubsRow
        title="Sports"
        subtitle="jhhjhvhgvh"
        clubs={[...clubs.filter((club) => club.type === "sports")]}
      />
      <ClubsRow
        title="Science"
        subtitle="jhhjhvhgvh"
        clubs={[...clubs.filter((club) => club.type === "science")]}
      />
    </div>
  )
}
