"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    SortingState,
    getSortedRowModel
} from "@tanstack/react-table"
import { useState } from "react"


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        }
    })

    return (
        <div className="rounded-md border">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-900 border-b">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="px-4 py-3 font-medium text-gray-200">
                                    {flexRender(header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="border-b hover:bg-gray-800">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="text-gray-200 px-4 py-3">
                                        {flexRender(cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )  :  (
                        <tr>
                            <td colSpan={columns.length} className="h-24 text-center text-gray-200">
                                No results.
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}