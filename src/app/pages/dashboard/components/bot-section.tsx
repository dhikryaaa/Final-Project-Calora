import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadialCaloriesChart } from "./radial-calories"

interface TopSectionData {
  totalCalories: number,

}

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-1 @2xl/main:grid-cols-3 @5xl/main:grid-cols-3">
      <Card className="@container/card">
        <div className="grid grid-cols-2">
          <div className="grid gap-3">
            <div>
              <CardHeader>
                <CardDescription>
                  Total Calories
                </CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  2,000 kcal
                </CardTitle>
              </CardHeader>
            </div>
            <div>
              <CardFooter className="flex-col items-start gap-1.5">
                <CardDescription>
                  Calorie Goal
                </CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  24,500 kcal
                </CardTitle>
              </CardFooter>
            </div>
          </div>
          <div>
            <RadialCaloriesChart />
          </div>
        </div>
      </Card>
      <Card className="@container/card gap-10">
        <CardHeader>
          <CardDescription>Days in target</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4/7
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5">
         <CardDescription>Average Calorie/day</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            2,700
          </CardTitle>
        </CardFooter>
      </Card>
      <Card className="@container/card gap-10">
        <CardHeader>
          <CardDescription>Best Day</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Friday
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <CardDescription>Worst Day</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Sunday
          </CardTitle>
        </CardFooter>
      </Card>
    </div>
  )
}
