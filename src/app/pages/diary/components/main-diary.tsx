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
import { Button } from "@/components/ui/button"
import { dummyMenus } from "./dummy"
import { IconPlus } from '@tabler/icons-react'
import AddFoodButton from './add-food-button'

export interface Menu {
    id: number,
    jenisMenu: string,
    userId: number,
    hari: Date,
    Foods: {
        id: number,
        foodName: string,
        foodId: number,
        kalori: number,
        menuId: number,
        originalServing: string,
        takaran: number
    }[]
}


function MainDiary() {
  const menus = ["Breakfast", "Lunch", "Dinner"]
  const [Diary, setDiary] = useState<Menu[] | null>(null)

  useEffect(() => {
    setDiary(dummyMenus)
  },[])

  function handleRemove(foodId: number){
    if (!Diary) return;

    const updatedDiary = Diary.map(menu => {
        const updatedFoods = menu.Foods.filter(food => food.id !== foodId);
        return { ...menu, Foods: updatedFoods };
    });

    setDiary(updatedDiary);
  }

  return (
    <div className='p-10'>
      <div className='grid lg:grid-cols-1 xl:grid-cols-3 gap-10'>
        {menus.map((menuType) => {
          const menu = Diary?.find(m => m.jenisMenu === menuType)

          return (
            <div key={menuType}>
              <div className='text-2xl py-2 border-b-2 w-full'>
                {menuType}
              </div>

              {menu && menu.Foods.length > 0 ? (
                menu.Foods.map(food => (
                  <Card key={food.id} className='@container/card w-full my-4'>
                    <CardHeader>
                      <CardTitle>{food.foodName}</CardTitle>
                      <CardDescription>
                        {food.kalori} kcal / {food.originalServing} x {food.takaran}
                      </CardDescription>
                      <CardAction>  
                        <Button variant="destructive" onClick={() => handleRemove(food.id)}>
                          Remove
                        </Button>
                      </CardAction>
                    </CardHeader>
                  </Card>
                ))
              ) : (
                <Card className='w-full my-4 opacity-60'>
                  <CardHeader>
                    <CardTitle>No items</CardTitle>
                    <CardDescription>
                      You haven’t added anything yet.
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
              <AddFoodButton menuType={menuType}/>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default MainDiary