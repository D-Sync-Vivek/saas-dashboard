'use client'
import { ColumnDef } from "@tanstack/react-table"
import { Transaction } from "@/types/analytics"

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
        header: "Amount",
        cell: ({row}) => {
            const amount = row.original.amount
            return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            const status = row.original.status
            return <div>{status}</div>
        }
    }
];