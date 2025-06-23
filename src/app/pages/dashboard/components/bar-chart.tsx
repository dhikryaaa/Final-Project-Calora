import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IntakeBarChart from './weekly-intake-chart'
import DailyIntakeChart from './daily-intake-chart'

function DayBarChart() {
  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs  @xl/main:grid-cols-1 @2xl/main:grid-cols-[3fr_2fr] @5xl/main:grid-cols-[3fr_2fr]'>
        <Card className='@container/card'>
            <CardHeader>
                <CardTitle>
                    Weekly Calorie
                </CardTitle>
                <CardDescription>
                    Calorie intake vs goal
                </CardDescription>
            </CardHeader>
            <CardContent>
                <IntakeBarChart />
            </CardContent>
        </Card>
        <Card className='space-y-10'>
            <CardHeader>
                <CardTitle>
                    Today's Calorie
                </CardTitle>
                <CardDescription>
                    Calorie Intake vs Daily Goal
                </CardDescription>
            </CardHeader>
            <CardContent>
                <DailyIntakeChart />
            </CardContent>
        </Card>
    </div>
  )
}

export default DayBarChart