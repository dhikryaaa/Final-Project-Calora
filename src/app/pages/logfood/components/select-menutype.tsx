import React from 'react'
import { 
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'

interface SelectMenuType {
    onSelect: (menuType: string) => void
}

function SelectMenuType({onSelect}: SelectMenuType) {

    const handleSelect = (value: string) => {
        onSelect(value);
    }

  return (
    <div>
        <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Menu Type" />
        </SelectTrigger>
        <SelectContent className="border-border">
            <SelectItem value={'Breakfast'}>
                Breakfast
            </SelectItem>
            <SelectItem value={'Lunch'}>
                Lunch
            </SelectItem>
            <SelectItem value={'Dinner'}>
                Dinner
            </SelectItem>
        </SelectContent>
        </Select>
    </div>
  )
}

export default SelectMenuType