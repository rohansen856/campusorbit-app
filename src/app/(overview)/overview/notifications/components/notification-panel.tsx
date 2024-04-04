import Link from "next/link"

import { Badge } from "@/components/ui/badge"

interface NotificationPanelProps {
  data: {
    title: string
    description: string
    branch: string
    group: string
    link: string
  }
}

export function NotificationPanel({ data }: NotificationPanelProps) {
  return (
    <div className="h-24 w-full overflow-hidden rounded-lg bg-secondary p-3">
      <div className="mb-2 flex w-full gap-4">
        <h3 className="text-lg font-bold">{data.title}</h3>
        <span>
          <Badge className="mx-1">{data.branch}</Badge>
          <Badge className="mx-1">{data.group}</Badge>
        </span>
        <Link
          href={data.link}
          target="_blank"
          className="ml-auto mr-12 rounded border border-white px-2"
        >
          visit
        </Link>
      </div>
      <h4 className="text-md truncate text-muted-foreground">
        {data.description}
      </h4>
    </div>
  )
}
