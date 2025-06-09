import React from 'react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from './theme-toggle'

function NavbarHome() {
  return (
    <div className='sticky top-0 z-50'>
        <nav className="flex bg-background p-5 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div>Calora</div>
                <div className="flex space-x-4">
                    <Button variant="default">
                        <a href="/auth/login">Login</a>
                    </Button>
                </div>
            </div>
                <ThemeToggle className="ml-4" />
        </nav>
    </div>
  )
}

export default NavbarHome