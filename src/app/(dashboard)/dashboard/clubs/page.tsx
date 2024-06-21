import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

import { ClubsRow } from "./components/clubs-row"

export const metadata = {
  title: "Clubs",
}

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
      <ClubsRow title="All Clubs" subtitle="jhhjhvhgvh" clubs={[...clubs]} />
      <ClubsRow title="Your Club" subtitle="jhhjhvhhhj" clubs={[]} />
      <ClubsRow
        title="Cultural"
        subtitle="cultural clubs"
        clubs={[...clubs.filter((club) => club.club_type === "cultural")]}
      />
      <ClubsRow
        title="Sports"
        subtitle="sports clubs"
        clubs={[...clubs.filter((club) => club.club_type === "sports")]}
      />
      <ClubsRow
        title="Science"
        subtitle="science and tech. clubs"
        clubs={[...clubs.filter((club) => club.club_type === "science")]}
      />
    </div>
  )
}
