import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { db } from "@/lib/db"
import { mongo } from "@/lib/mongo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface UsersTableProps extends React.HTMLProps<HTMLDivElement> {
  allViews: {
    _id: string
    count: number
  }[]
}

export async function UsersTable({ allViews, ...props }: UsersTableProps) {
  const profiles = await db.account.findMany({
    select: {
      email: true,
      created_at: true,
      profile: {
        select: {
          username: true,
          image: true,
          year: true,
          programme: true,
          branch: true,
        },
      },
    },
    take: 50,
  })

  // const recentLogs = await mongo
  //   .db("analytics")
  //   .collection("views")
  //   .find<{ time: string; route: string }>({})
  //   .limit(10)
  //   .toArray()

  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Card className="xl:col-span-2 max-h-96" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>User Data</CardTitle>
            <CardDescription>
              All verified users of campusorbit.
            </CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="#">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {profiles.map((user) => (
                <TableRow className="flex gap-4">
                  <TableCell>
                    <Avatar className="h-9 w-9 bg-secondary">
                      <AvatarImage
                        src={user.profile?.image || "/logo.png"}
                        alt="Avatar"
                        className="object-contain"
                      />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="">
                    <div className="font-medium">{user.email}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      since {user.created_at.toDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="ml-auto text-right px-2 md:px-8">
                    <p>year: {user.profile?.year}</p>
                    <p>
                      {user.profile?.programme} - {user.profile?.branch}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="max-h-96 overflow-y-auto" x-chunk="dashboard-01-chunk-5">
        <CardHeader>
          <CardTitle>All PageViews</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          {allViews.map((log) => (
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>CO</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {log._id.split("/")[1]}
                </p>
                <p className="text-sm text-muted-foreground max-w-[200px] text-clip">
                  {log._id}
                </p>
              </div>
              <div className="ml-auto font-medium">+{log.count}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
