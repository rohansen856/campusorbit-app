import { ClubCard } from "./club-card"

interface ClubsSectionProps {
  title: string
  clubs: React.ReactNode
}

export function ClubsSection({ title, clubs }: ClubsSectionProps) {
  return (
    <div className="mb-2 w-full bg-red-800">
      <h3 className="text-md mb-1 lg:text-lg 2xl:text-xl">{title}</h3>
      <div className="flex h-32 w-full gap-3 overflow-x-scroll">
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
      </div>
    </div>
  )
}
