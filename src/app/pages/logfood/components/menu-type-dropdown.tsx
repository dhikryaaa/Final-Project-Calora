import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { IconTriangleInvertedFilled } from "@tabler/icons-react"

import React from 'react'

interface Props{
    menuType: string
    onSelect: (value: string) => void
}

const dropdownContent = [
    "Breakfast",
    "Lunch",
    "Dinner"
]

function MenuTypeDropdown({menuType, onSelect}: Props) {
  return (
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className='text-3xl font-normal w-fit justify-center'>
            {menuType}
            <IconTriangleInvertedFilled className="mx-2.5"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
       <DropdownMenuLabel>Select Option</DropdownMenuLabel>
       <DropdownMenuSeparator />
        {dropdownContent.map((option) => (
          <DropdownMenuItem key={option} onClick={() => onSelect(option)}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuTypeDropdown