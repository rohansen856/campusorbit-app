import { Profile } from "@prisma/client"
import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

interface UserCardProps extends React.ComponentProps<typeof Card> {
  profile: Profile | null
}

export function UserCard({ profile, ...props }: UserCardProps) {
  return (
    profile && (
      <Card
        className={cn("w-[380px] overflow-hidden", props.className)}
        {...props}
      >
        <CardHeader className="flex flex-row flex-wrap items-center">
          <Avatar className="size-20 bg-secondary">
            <AvatarImage
              src={profile.image ?? "https://github.com/shadcn.png"}
              alt="@shadcn"
              className="object-contain"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="text-xl lg:text-3xl">{profile.full_name}</p>
            <p className="text-md text-muted-foreground lg:text-xl">
              @{profile.username}
            </p>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex size-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 size-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    )
  )
}
