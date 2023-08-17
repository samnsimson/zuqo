import { HTMLAttributes, useEffect, useState } from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export type ColumnProps<T, K> = {
    key: T
    value: K
}

interface DataTableProps<TData, TColumns extends ColumnProps<any, any>> extends HTMLAttributes<HTMLDivElement> {
    columns: TColumns[]
    data: TData[]
}

export function DataTable<TData, TColumns extends ColumnProps<any, any>>({ columns: cols, data, ...props }: DataTableProps<TData, TColumns>) {
    const [columns, setColumns] = useState<ColumnDef<TData>[]>([])
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
    const headerGroups = table.getHeaderGroups()
    const { rows } = table.getRowModel()

    useEffect(() => {
        setColumns(cols.map(({ key, value }) => ({ accessorKey: key, header: value, cell: (info) => info.getValue() })))
    }, [cols])

    return (
        <div {...props}>
            <Table className="bg-white">
                <TableHeader>
                    {headerGroups.map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="text-xs font-normal leading-snug text-gray-900 opacity-70">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {rows.length ? (
                        rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} className="py-3">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
