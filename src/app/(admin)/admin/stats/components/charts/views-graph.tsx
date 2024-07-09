import { mongo } from "@/lib/mongo"

import { VisitsChart } from "./area-chart"

export async function ViewsGraph() {
  const pipeline = [
    {
      $match: {
        time: {
          $gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // Filter for last 24 hours
        },
      },
    },
    {
      $group: {
        _id: { $hour: "$time" }, // Group by hour of the day
        count: { $sum: 1 }, // Count occurrences
      },
    },
    {
      $sort: { _id: 1 }, // Sort by hour
    },
  ]

  const result = (
    await mongo
      .db("analytics")
      .collection("views")
      .aggregate(pipeline)
      .toArray()
  ).map((data) => ({ key: data._id, value: data.count }))

  return (
    <div className="w-full">
      <VisitsChart chartData={result} />
    </div>
  )
}
