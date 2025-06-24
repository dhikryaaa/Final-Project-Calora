'use client'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface category {
  Breakfast: number,
  Lunch: number,
  Dinner: number
}

function TopCardGoal() {
  const [categoryCalories, setCategoryCalories] = useState<category>({
    Breakfast: 0,
    Lunch: 0,
    Dinner: 0
  })

  const fetchData = async () => {
    try {
      const res = await fetch("/api/usersstats")
      const data = await res.json()

      if (!res.ok) throw new Error("Failed to fetch data")

      setCategoryCalories(data.perKategoriHariIni)

    } catch (error) {
      console.error("Error Fetching Data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-1 @2xl/main:grid-cols-3 @5xl/main:grid-cols-3">
      {["Breakfast", "Lunch", "Dinner"].map((meal) => (
        <Card key={meal} className="@container/card">
          <CardHeader>
            <CardDescription>{meal}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {categoryCalories[meal as keyof category]} kcal
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm text-muted-foreground">
            Calories eaten at {meal.toLowerCase()}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default TopCardGoal