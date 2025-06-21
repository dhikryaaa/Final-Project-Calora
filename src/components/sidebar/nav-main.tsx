"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "../theme-toggle"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {

  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => {
            const isSelected = pathname === item.url

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={isSelected ? true : false}
                  onClick={() => router.push(`${item.url}`)}
                >
                  {item.icon && <item.icon className="mr-2" />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
