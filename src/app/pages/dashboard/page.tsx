import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { ChartAreaInteractive } from "@/components/sidebar/chart-area-interactive"
import { DataTable } from "@/components/sidebar/data-table"
import { SectionCards } from "@/app/pages/dashboard/components/bot-section"
import { SiteHeader } from "@/components/sidebar/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import DashboardHeader from "./components/dashboard-header"
import DayBarChart from "./components/bar-chart"
import TopCardGoal from "./components/top-section"


export default function Page() {
  return (
        <>
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-4">
              <DashboardHeader />
              {/* <ChartAreaInteractive /> */}
              <TopCardGoal />
              <DayBarChart />
              {/* <SectionCards /> */}
              </div>
            </div>
        </>
  )
}
