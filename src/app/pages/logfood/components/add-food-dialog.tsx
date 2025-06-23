'use client'
// import dummyTransaction from '@/pages/api/dummy/transactions'
import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { DialogDescription } from '@radix-ui/react-dialog'
import { IconPlus } from '@tabler/icons-react'
import SelectMenuType from './select-menutype'
import { Food } from './food-list'

export interface AddFood {
  jenisMenu: string,
  foodId: number,
  namaMakanan: string,
  kalori: number,
  menuId: number,
  takaranAwal: string,
  takaran: number
}

interface Props {
    menuType: string
    food: Food
}

function AddFoodDialog({menuType, food}: Props) {
  const [open, setOpen] = useState(false)
  const [takaran, setTakaran] = useState<string>('')
  const [jenisMenu, setJenisMenu] = useState<string>('')
  
  function extractCaloriesAndServing(desc: string): { calories: number; servingWeight: number, servingUnit: string } | null {
    const calMatch = desc.match(/([\d.]+)\s*kcal/i);
    const sizeMatch = desc.match(/([\d.]+)/);
    const unitMatch = desc.match(/^(.+?)\s*-/)

    console.log( calMatch, sizeMatch, unitMatch )

    if (!calMatch || !sizeMatch || !unitMatch) return null;

    const calories = parseFloat(calMatch[1]);
    const servingWeight = parseFloat(sizeMatch[1]);
    const servingUnit = unitMatch[1];

    if (isNaN(calories) || isNaN(servingWeight)) return null;

    return { calories, servingWeight, servingUnit };
  } 

  async function handleSubmit() {
    const selectedMenu = menuType !== 'Select Meal Type' ? menuType : jenisMenu;

    if (!selectedMenu || !takaran) {
      toast.error("Please select menu type and enter serving size");
      return;
    }

    const takaranNumber = parseFloat(takaran);
    if (isNaN(takaranNumber) || takaranNumber <= 0) {
      toast.error("Serving size must be a positive number");
      return;
    }

    const parsed = extractCaloriesAndServing(food.food_description);
    if (!parsed) {
      toast.error("Could not parse calories or serving size from description");
      return;
    }


    const { calories, servingUnit } = parsed;
    const totalCalories = Math.round(calories * takaranNumber);

    try {
      const response = await fetch("/api/inputmakanan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jenisMenu: selectedMenu,
          foodId: Number(food.food_id),
          takaran: takaranNumber,
          kalori: totalCalories,
          namaMakanan: food.food_name,
          takaranAwal: servingUnit,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "Failed to add food");
        return;
      }

      toast.success("Food added successfully");
      setOpen(false);
      setTakaran('');
    } catch (error) {
      console.error("Failed to submit:", error);
      toast.error("An error occurred while adding food");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
       <Button className='w-full h-full rounded-tl-none rounded-bl-none' variant='ghost'>
            <IconPlus className='scale-200'/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
            <DialogTitle>
                {food.food_name}
            </DialogTitle>
            <DialogDescription>
                {food.food_description}
            </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className='space-y-2'>
            <Label htmlFor="category">Menu Type</Label>
            {menuType !== 'Select Meal Type' ? (
                <p>{menuType}</p>
            ):(
                <SelectMenuType onSelect={(cat) => setJenisMenu(cat)} />
            )}
          </div>
          <div className='space-y-2'>
            <Label 
            htmlFor="amount">Serving Size Multiplier</Label>
            <Input
              id="amount"
              type="number"
              placeholder='eg. 1'
              value={takaran}
              onChange={(e) => setTakaran(e.target.value)}
            />
          </div>
          <Button onClick={handleSubmit} className="w-full">
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default AddFoodDialog;
