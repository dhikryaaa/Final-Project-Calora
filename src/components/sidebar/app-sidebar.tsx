"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconLogout,
  IconInfoCircle,
  IconPencil
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/sidebar/nav-documents"
import { NavMain } from "@/components/sidebar/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/pages/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Diary",
      url: "/pages/diary",
      icon: IconListDetails,
    },
    {
      title: "Log Food",
      url: "/pages/logfood",
      icon: IconPencil,
    },
    {
      title: "Goal",
      url: "/pages/goal",
      icon: IconChartBar,
    },

  ],
  other: [
    {
      name: "About",
      url: "#",
      icon: IconInfoCircle,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Calora</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.other} />
      </SidebarContent>
    </Sidebar>
  )
}
