'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { IconPlus } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

type Props = {
    menuType: string
}

function AddFoodButton({menuType}: Props) {
    const router = useRouter()
  return (
    <Button variant={'ghost'} className='w-full' onClick={() => router.push(`/pages/logfood?menuType=${encodeURIComponent(menuType)}`)}>
        Add Food
        <IconPlus />
    </Button>
  )
}

export default AddFoodButton