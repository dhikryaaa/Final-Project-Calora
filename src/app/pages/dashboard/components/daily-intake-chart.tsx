'use client'
import React, { useEffect, useState } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Bar,
  ResponsiveContainer,
  YAxis
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

function DailyIntakeChart() {
  const [chartData, setChartData] = useState([
    { intake: 0, dailyGoal: 0 },
  ])

  const fetchChartData = async () => {
    try {
      const res = await fetch('/api/usersstats')
      const data = await res.json()

      if (!res.ok) {
        console.error(data.error || 'Gagal fetch')
        return
      }

      const total = data.totalHariIni || 0
      const goal = data.targetHariIni || 0

      setChartData([
        {
          intake: total,
          dailyGoal: goal,
        },
      ])
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  useEffect(() => {
    fetchChartData()
  }, [])

  return (
    <div>
      <ResponsiveContainer width='100%' height={300}>
       <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey="intake"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
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