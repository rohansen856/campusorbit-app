import { mongo } from "@/lib/mongo"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { VisitsChart } from "./area-chart"

export async function ViewsGraph() {
  const pipeline = [
    {
      $match: {
        time: {
          $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Filter for last 7 days
        },
      },
    },
    {
      $group: {
        _id: { $hour: "$time" }, // Group by hour of the day
        count: { $sum: 1 }, // Count occurrences
        dev: {
          $sum: {
            $cond: [{ $eq: ["$user", "::1"] }, 1, 0], // Count occurrences of users with ip "::1"
          },
        },
      },
    },
    {
      $sort: { _id: 1 }, // Sort by hour
    },
    {
      $limit: 300, // Limit the results to 300
    },
  ]

  const result = (
    await mongo
      .db("analytics")
      .collection("views")
      .aggregate(pipeline)
      .toArray()
  ).map((data) => ({ key: data._id, visitors: data.count, dev: data.dev }))

  return (
    <div className="w-full">
      <Card>
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle>Area Chart - Interactive</CardTitle>
            <CardDescription>
              Showing total visitors for the last 7 days
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <VisitsChart chartData={result} />
        </CardContent>
      </Card>
    </div>
  )
}
