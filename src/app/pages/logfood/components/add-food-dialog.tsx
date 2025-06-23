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
  foodName: string,
  kalori: number,
  menuId: number,
  originalServing: string,
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
  
  function handleSubmit(){
    //
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
