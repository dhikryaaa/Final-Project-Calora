'use client'
import React, {useState, useEffect} from 'react'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { IconTriangleInvertedFilled } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useDebounce from '@/app/hooks/useDebounce'
import FoodList from './components/food-list'
import MenuTypeDropdown from './components/menu-type-dropdown'

function Page() {
    const [mealType, setMealType] = useState<string>('')
    const [foodSearch, setFoodSearch] = useState<string>('')
    const menuType = useSearchParams()
    
    const debouncedSearchValue = useDebounce(foodSearch, 250)

    useEffect(() => {
        const type = menuType?.get('menuType') ?? 'Select Meal Type'
        const validTypes = ['Breakfast', 'Lunch', 'Dinner', 'Select Meal Type']

        if (!validTypes.includes(type)) {
            return
        }
        
        setMealType(type)

    },[menuType])

  return (
    <div>
        <div className='grid lg:grid-cols-1 xl:grid-cols-2 self-center'>
            <div className='space-y-2 mt-5 text-center gap-2 flex flex-col justify-center'>
                <div className='flex justify-center'>
                    <MenuTypeDropdown menuType={mealType} onSelect={(value) => setMealType(value)}/>
                </div>
                <div className='flex justify-center'>
                    <Input  
                    className='w-100 rounded-2xl my-10'
                    placeholder='Search food...'
                    value={foodSearch}
                    onChange={(e) => setFoodSearch(e.target.value)}/>
                </div>
            </div>
            <div className='mt-10'>
                <FoodList searchParams={debouncedSearchValue} menuType={mealType}/>
            </div>
        </div>
    </div>
  )
}

export default Page