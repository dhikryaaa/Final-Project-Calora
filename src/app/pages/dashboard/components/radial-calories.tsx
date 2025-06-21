"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const calorieTotal = 2000
const calorieGoal = 24500
const ratioPercentage = Math.min((calorieTotal / calorieGoal) * 100, 100)
const endAngle = (ratioPercentage / 100) * 360

const chartData = [
  { Calorie: 2000, fill: "var(--color-Calorie)", percentage: ratioPercentage },
]

const chartConfig = {
  Calorie: {
    label: "Calorie",
    color: "var(--primary)"
  },
} satisfies ChartConfig

export function RadialCaloriesChart() {
  return (

        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={endAngle}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="Calorie" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].percentage.toLocaleString() + '%'}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 30}
                          className="fill-muted-foreground"
                        >
                          Percentage
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
  )
}
