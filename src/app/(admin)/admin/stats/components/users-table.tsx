import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { db } from "@/lib/db"
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

export async function UsersTable() {
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

  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store.
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
      <Card x-chunk="dashboard-01-chunk-5">
        <CardHeader>
          <CardTitle>Recent Signups</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/02.png" alt="Avatar" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <p className="text-sm text-muted-foreground">
                jackson.lee@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/03.png" alt="Avatar" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                Isabella Nguyen
              </p>
              <p className="text-sm text-muted-foreground">
                isabella.nguyen@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$299.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/04.png" alt="Avatar" />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">William Kim</p>
              <p className="text-sm text-muted-foreground">will@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$99.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/05.png" alt="Avatar" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">
                sofia.davis@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
