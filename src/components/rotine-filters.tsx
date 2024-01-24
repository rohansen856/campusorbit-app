import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function YearFilter() {
    const years = [1, 2, 3, 4]
    let checkedVal = 0

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                    Select Year <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {years.map((year) => {
                    return (
                        <DropdownMenuCheckboxItem
                            key={year}
                            className="capitalize"
                            checked={year === checkedVal}
                            onClick={() => (checkedVal = year)}
                            onCheckedChange={
                                (value) => {}
                                // checkedVal = value
                            }
                        >
                            {year}
                        </DropdownMenuCheckboxItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function BranchFilter() {
    const branches = ["bcs", "bec", "bme", "bsm"]
    let checkedVal = ""

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                    Select Branch <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {branches.map((branch) => {
                    return (
                        <DropdownMenuCheckboxItem
                            key={branch}
                            className="uppercase"
                            checked={branch === checkedVal}
                            onClick={() => (checkedVal = branch)}
                            onCheckedChange={
                                (value) => {}
                                // checkedVal = value
                            }
                        >
                            {branch}
                        </DropdownMenuCheckboxItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function DayFilter() {
    const days = [1, 2, 3, 4, 5]
    let checkedVal = 0

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                    Select Day <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {days.map((day) => {
                    return (
                        <DropdownMenuCheckboxItem
                            key={day}
                            className="capitalize"
                            checked={day === checkedVal}
                            onClick={() => (checkedVal = day)}
                            onCheckedChange={
                                (value) => {}
                                // checkedVal = value
                            }
                        >
                            {day}
                        </DropdownMenuCheckboxItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
