import Image from "next/image"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { Clubs } from "@prisma/client"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { ClubJoinButton } from "./components/club-join-button"
import { PastEvents } from "./components/past-events"
import { UpcomingEvents } from "./components/upcoming-events"

interface ClubDetails extends Clubs {
  _count: { members: number }
}

async function getClubDetails(
  clubId: Clubs["id"]
): Promise<ClubDetails | null> {
  return await db.clubs.findFirst({
    where: {
      id: clubId,
    },
    include: {
      _count: {
        select: {
          members: {
            where: {
              role: {
                not: "pending",
              },
            },
          },
        },
      },
    },
  })
}

interface ClubPageProps {
  params: { clubId: string }
}

export default async function ClubPage({ params }: ClubPageProps) {
  const user = await getCurrentUser()

  if (!user) return redirect("/login")

  const club = await getClubDetails(params.clubId)

  if (!club) {
    notFound()
  }

  const memberShip = await db.clubMembers.findFirst({
    where: {
      user_id: user.id,
      club_id: club.id,
    },
  })

  return (
    <div className="w-full">
      <div className="w-full p-4 flex flex-col lg:flex-row gap-2">
        <div className="w-full space-y-4">
          <div className="w-full h-[40vh] rounded-lg bg-secondary relative">
            <Image
              src={club.image || "/logo.png"}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-full max-w-xl px-2 max-h-[40vh] flex flex-col">
          <h1 className="text-xl lg:text-3xl 2xl:text-5xl font-heading text-pretty">
            {club.name}
          </h1>
          <h3 className="text-secondary-foreground text-lg lg:text-xl 2xl:text-2xl">
            the {club.field} club
          </h3>
          <p>{club._count.members || 0} members</p>
          <p>
            visit the club's
            {club.website && (
              <Link
                href={club.website}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "link",
                    className: "ml-px text-blue-500",
                  })
                )}
              >
                homepage
              </Link>
            )}
          </p>
          {!memberShip ? (
            <ClubJoinButton clubId={club.id} />
          ) : (
            <div>
              {}
              <Badge className="border-2 border-cyan-900 bg-secondary text-primary mt-4">
                Membership: {memberShip.role}
              </Badge>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <UpcomingEvents />
        <PastEvents />
      </div>
    </div>
  )
}
