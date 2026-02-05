'use client'
import { ColumnDef } from "@tanstack/react-table"
import { Transaction } from "@/types/analytics"
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "user",
        header: "Customer",
        cell: ({ row }) => {
            const user = row.original.user
            return (
                <>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-gray-600">{user.email}</div>
                </>
            )
        }
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <button
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
            )
        },
        cell: ({ row }) => {
            const amount = row.original.amount
            return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status
            return <div>{status}</div>
        }
    }
];