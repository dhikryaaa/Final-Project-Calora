'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function MainGoal() {
  const [calorieGoal, setCalorieGoal] = useState<string>('')

  async function handleSubmit(){
    if (!calorieGoal){
      return
    }
    
    if (parseInt(calorieGoal) <= 0){
      toast.error("Calorie goal cannot be negative")
      return
    }
    
    const parsedGoal = parseInt(calorieGoal)
    
    try {
      const res = await fetch("/api/buattargetharian", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          target: parsedGoal
        })
      })

      const data = await res.json

      if (!res.ok) throw new Error("Failed to Fetch Data")

      toast.success("Daily target set successfully!")
    } catch (error) {
      console.error("Fetch error:", error)
    }
  }
  
  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <h1 className='text-xl'>
          Set Calorie Goal <span className='text-sm text-muted-foreground mx-1'>(for this day)</span>
        </h1>
        <Input
        className='w-fit h-10'
        value={calorieGoal}
        onChange={(e) => setCalorieGoal(e.target.value)}
        type='number'
        placeholder='eg. 2000'
        />
      </div>
      <div>
        <h1 className='text-muted-foreground'>Enter a positive number (typically between 1200-3000 calories)</h1>
      </div>
        <Button 
          variant={'ghost'} 
          disabled={calorieGoal === '' ? true : false}
          onClick={() => handleSubmit()}
          >
          Submit
        </Button>
        <div className='border-b' />
        <div className='space-y-4'>
          <h1>Common calorie guide</h1>
          <div className='flex gap-6'>
            <div className='border border-bg p-2 rounded-xl'>
              <h1>Sedentary Adults(Inactive)</h1>
              <p className='text-muted-foreground'>1,800 - 2,200 calories/day</p>
            </div>
             <div className='border border-bg p-2 rounded-xl'>
              <h1>Active Adults</h1>
              <p className='text-muted-foreground'>2,200 - 2,800 calories/day</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainGoal