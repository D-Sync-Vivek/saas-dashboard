import { DashboardCardProps } from "@/types/analytics"

const DashboardCard = ({ title, value, icon: Icon, trend }: DashboardCardProps) => {
    const trendcol = trend.direction == "up" ? "text-green-500" : "text-red-500";
    return (
        <div className="flex flex-col rounded-xl border bg-gray-800 shadow-sm p-6">
            <div className="flex flex-row justify-between">
                <header className="text-sm font-medium">{title}</header>
                <Icon />
            </div>
            <div className="text-2xl font-bold">{value}</div>
            <div className={`${trendcol} text-sm`}>{trend.value}%</div>
        </div>
    )
}

export default DashboardCard
