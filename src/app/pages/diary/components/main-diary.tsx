'use client'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AddFoodButton from './add-food-button'

export interface Menu {
    id: number,
    jenisMenu: string,
    userId: number,
    hari: Date,
    Foods: Food[]
}

export interface Food {
  id: number,
  foodId: number,
  kalori: number,
  menuId: number,
  takaran: number,
  namaMakanan: string,
  takaranAwal: number
}

function MainDiary() {
  const menus = ["Breakfast", "Lunch", "Dinner"]
  const [Diary, setDiary] = useState<Menu[] | null>(null)

   useEffect(() => {
    async function fetchDiary() {
      try {
        
        const res = await fetch("/api/diarymakanan");
        
        if (!res.ok) throw new Error("Failed to fetch diary");

        const data: Record<string, Food[]> = await res.json();

        const formatted: Menu[] = Object.entries(data).map(([jenisMenu, foods]) => ({
          id: 0,
          jenisMenu,
          userId: 0,
          hari: new Date(),
          Foods: foods.map(food => ({
            id: food.id,
            namaMakanan: food.namaMakanan,
            foodId: food.foodId,
            kalori: food.kalori,
            menuId: food.menuId,
            takaranAwal: food.takaranAwal,
            takaran: food.takaran,
          }))
        }));

        setDiary(formatted);
      } catch (err) {
        console.error("Error fetching diary:" + err);
      }
    }

    fetchDiary();
  }, []);

  async function handleRemove(foodId: number){
    try{
      const res = await fetch("/api/hapusmakanan", {
        method: "DELETE",
        body: JSON.stringify({ id: foodId }),
      })

      if (!res.ok) throw new Error("Failed to delete food");

      if (!Diary) return;

      const updatedDiary = Diary.map(menu => {
          const updatedFoods = menu.Foods.filter(food => food.id !== foodId);
          return { ...menu, Foods: updatedFoods };
      });

      setDiary(updatedDiary);
    } catch (error){
      console.error("Error removing food:", error)
    }
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
                      <CardTitle>{food.namaMakanan}</CardTitle>
                      <CardDescription>
                        {food.kalori} cal / {food.takaranAwal} x {food.takaran}
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