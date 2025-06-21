import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { ChartAreaInteractive } from "@/components/sidebar/chart-area-interactive"
import { DataTable } from "@/components/sidebar/data-table"
import { SectionCards } from "@/app/pages/dashboard/components/section-cards"
import { SiteHeader } from "@/components/sidebar/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"


export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="p-4">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
