import DashboardCard from "@/Components/DashboardCard"
import { Settings } from "lucide-react"

export default function page() {
  const stats: Array<{ title: string; value: string; trend: { value: number; direction: "up" | "down" } }> = [{ title: "Revenue", value: "$45,231.89", trend: { value: 20, direction: "up" } }, { title: "Subscriptions", value: "2,350", trend: { value: 180.1, direction: "up" } }, { title: "Sales", value: "12,234", trend: { value: 19, direction: "up" } }, { title: "Active Now", value: "573", trend: { value: 201, direction: "up" } }]
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <DashboardCard key={stat.title} title={stat.title} value={stat.value} icon={Settings} trend={{ value: stat.trend.value, direction: stat.trend.direction }} />
      ))}
    </div>
  )
}
