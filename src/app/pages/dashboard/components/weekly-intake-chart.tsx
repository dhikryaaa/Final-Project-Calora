"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { day: "Monday", intake: 2400, goal: 3200 },
  { day: "Tuesday", intake: 2700, goal: 3200 },
  { day: "Wednesday", intake: 3000, goal: 3200 },
  { day: "Thursday", intake: 3100, goal: 3200 },
  { day: "Friday", intake: 2900, goal: 3200 },
  { day: "Saturday", intake: 2700, goal: 3200 },
  { day: "Sunday", intake: 2850, goal: 3200 },
]

const chartConfig = {
  intake: {
    label: "Intake",
    color: "var(--chart-1)",
  },
  goal: {
    label: "Goal",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function IntakeBarChart() {
  return (
        <ChartContainer config={chartConfig} className="h-100 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey="goal"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="intake" fill="var(--color-intake)" radius={12} />
            <Bar dataKey="goal" fill="var(--color-goal)" radius={12} />
          </BarChart>
        </ChartContainer>
  )
}

export default IntakeBarChart