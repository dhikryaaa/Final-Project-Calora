'use client'
import React from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Bar,
  ResponsiveContainer
} from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  dailyGoal: {
    label: "Daily Goal",
    color: "var(--chart-2)"
  },
  intake: {
    label: "Intake",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const chartData = [
  { intake: "2600", dailyGoal: 1260},
]

function getAngle(num: number){
  
}

function DailyIntakeChart() {
  return (
    <div>
      <ResponsiveContainer width='100%' height={300}>
       <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="intake"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="intake" fill="var(--color-intake)" radius={8} />
            <Bar dataKey="dailyGoal" fill="var(--color-dailyGoal)" radius={8} />
          </BarChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyIntakeChart