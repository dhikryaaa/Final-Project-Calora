import React from 'react'
import { Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function InfoCard() {
  return (
    <Card className='bg-bg border-amber-300/70 text-amber-400/70'>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'>
            <Info />
            <p className='h-fit'>
                About calorie goals
            </p>
            </CardTitle>
            <CardDescription>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div>
                This value will be used as the baseline for this day only. This means that you would need to input the goal for each day.
            </div>
        </CardContent>
    </Card>
  )
}

export default InfoCard