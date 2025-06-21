"use client"

import * as React from "react"
import { type Icon } from "@tabler/icons-react"
import { IconSettings }  from "@tabler/icons-react"
import { ThemeToggle } from "../theme-toggle"
import {
  useSidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { isMobile } = useSidebar()
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu className="mb-10">
          <SidebarMenuItem>
            <SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  Settings
                </DropdownMenuTrigger>
                 <DropdownMenuContent side="right">
                <DropdownMenuGroup>
                </DropdownMenuGroup>
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
