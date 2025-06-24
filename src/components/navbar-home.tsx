import React from 'react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from './theme-toggle'

function NavbarHome() {
  return (
    <div className='sticky top-0 z-50'>
        <nav className="flex p-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className='text-xl'>Calora</div>
                <div className="flex space-x-4">
                    <Button variant="outline">
                        <a href="/auth/login">Login</a>
                    </Button>
                    <Button variant='outline'>
                        <a href="/auth/register">Register</a>
                    </Button>
                </div>
            </div>
                <ThemeToggle className="ml-4" />
        </nav>
    </div>
  )
}

export default NavbarHome