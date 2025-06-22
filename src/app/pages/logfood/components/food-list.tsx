import React, {useState, useEffect} from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { IconPlus } from '@tabler/icons-react'

interface Foods {
    brand_name: string,
    food_description: string,
    food_id: string,
    food_name: string,
}

interface Props {
    searchParams: string
    menuType: string
}

function FoodList({searchParams, menuType}: Props) {
    const [foods, setFoods] = useState<Foods[]>();

    useEffect(() => {
      const fetchFoods = async () => {
        try {
          const res = await fetch(`/api/carimakanan?q=${encodeURIComponent(searchParams)}`);
          const data = await res.json();

          if (res.ok) {
            // Filter out nulls and set as empty if no valid items
            const validItems = (data.items ?? []).filter((item: any) => item !== null);
            setFoods(validItems.length > 0 ? validItems : []);
          } else {
            console.error(data.error);
            setFoods([]);
          }
        } catch (err) {
          console.error('Failed to fetch foods:', err);
          setFoods([]);
        }
      };

      if(!searchParams){
        return
      } else{
        fetchFoods();
      }

    }, [searchParams]);


  return (
    <div className='grid grid-cols-1 gap-5 mx-10 h-200 overflow-y-scroll'>
         {foods === undefined ? (
        <div className="col-span-full text-center">Start searching foods via the search bar</div>
      ) : foods?.length === 0 ? (
        <div className="col-span-full text-center text-red-500">Food not found.</div>
      ) : (
        foods?.map((food) => (
          <div key={food.food_id}>
            <Card className='h-full grid grid-cols-[1fr_7rem] py-0 my-5'>
                <CardHeader>
                  <CardTitle className='mt-5 text-xl font-semibold'>
                    {food.food_name}
                  </CardTitle>
                  <CardDescription className='text-sm text-muted-foreground'>
                    {food.food_description}
                  </CardDescription>
                </CardHeader>
                <Button className='w-full h-full rounded-tl-none rounded-bl-none' variant='ghost'>
                  <IconPlus className='scale-200'/>
                </Button>
            </Card>
          </div>
        ))
      )}
      </div>
  )
}

export default FoodList