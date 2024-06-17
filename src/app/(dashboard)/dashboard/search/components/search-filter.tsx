import { Profile } from "@prisma/client"
import { CirclePlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

interface SearchFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  setProfiles: React.Dispatch<React.SetStateAction<Profile[]>>
}

export function SearchFilter({
  setProfiles,
  ...props
}: SearchFilterProps) {
  return (
    <div className="flex w-full gap-2">
      <div className="relative flex items-center">
        <Input
          onChange={(e) => {
            setProfiles((profiles) =>
              profiles.filter(
                (user) =>
                  user.full_name?.includes(e.target.value) ||
                  user.username?.includes(e.target.value)
              )
            )
          }}
          placeholder="Search users..."
          className="border-2 "
        />
        <Button
          className="absolute right-2 size-7 p-0"
          variant="secondary"
          size="icon"
        >
          <Icons.search className="size-4" />
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            <CirclePlus />
            By Year
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by year</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {[1, 2, 3, 4].map((year) => (
              <DropdownMenuItem
                onClick={() => {
                  setProfiles((profiles) =>
                    profiles.filter((user) => user.year === year)
                  )
                }}
              >
                {/* <User className="mr-2 h-4 w-4" /> */}
                <span>{year} Year</span>
                <DropdownMenuShortcut>⇧⌘{year}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            <CirclePlus />
            By Branch
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Filter by branch</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {/* <User className="mr-2 h-4 w-4" /> */}
              <span>CSE</span>
              <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <CreditCard className="mr-2 h-4 w-4" /> */}
              <span>ECE</span>
              <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
