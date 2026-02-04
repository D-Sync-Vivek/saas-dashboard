import { LucideIcon } from "lucide-react";

export interface MetricCardData {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down" | "neutral";
}

export interface Transaction{
    id: string;
    user: {
        name: string;
        email: string;
        avatar?: string;
    };
    amount: number;
    status: 'pending' | 'success' | 'failed' | 'processing';
    date: string;
}

export interface DashboardCardProps{
    title: string;
    value: string;
    icon: LucideIcon;
    trend: {
        value: number;
        direction: "up" | "down";
    }
}