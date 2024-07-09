import { weekDays } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

interface OccuranceTableProps extends React.HTMLProps<HTMLTableElement> {
  occurances: {
    class_type: string
    day: number
    from: Date
    to: Date
  }[]
}

export function OccuranceTable({ occurances, ...props }: OccuranceTableProps) {
  return (
    <Table>
      <TableCaption>A list of all the classes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Day</TableHead>
          <TableHead className="w-[100px]">From</TableHead>
          <TableHead>To</TableHead>
          <TableHead className="text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {occurances.map((data, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{data.class_type}</TableCell>
            <TableCell>{weekDays[data.day]}</TableCell>
            <TableCell>{new Date(data.to).getHours()}:00</TableCell>
            <TableCell>{new Date(data.from).getHours()}:00</TableCell>
            <TableCell className="text-right">
              {new Date(data.to).getHours() - new Date(data.from).getHours()}{" "}
              hours
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="w-full bg-blue-700"></TableFooter>
    </Table>
  )
}
