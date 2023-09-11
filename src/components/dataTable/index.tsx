import { HTMLAttributes, useEffect, useState } from 'react'
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ColumnProps<T, K> = {
    key: T
    value: K
    sortable?: boolean
}

interface DataTableProps<TData, TColumns extends ColumnProps<any, any>> extends HTMLAttributes<HTMLDivElement> {
    darkHeader?: boolean
    columns: TColumns[]
    data: TData[]
}

export function DataTable<TData, TColumns extends ColumnProps<any, any>>({
    columns: cols,
    data,
    className,
    darkHeader,
    ...props
}: DataTableProps<TData, TColumns>) {
    const [columns, setColumns] = useState<ColumnDef<TData>[]>([])
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel() })
    const pageCount = table.getPageCount()
    const headerGroups = table.getHeaderGroups()
    const { pagination } = table.getState()
    const { rows } = table.getRowModel()

    useEffect(() => {
        setColumns(
            cols.map(
                ({ key, value }): ColumnDef<TData> => ({
                    accessorKey: key,
                    header: value,
                    cell: (info) => info.getValue(),
                })
            )
        )
    }, [cols])

    return (
        <div className={cn('', className)} {...props}>
            <Table className="bg-white">
                <TableHeader>
                    {headerGroups.map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead
                                    key={header.id}
                                    className={cn('text-xs font-normal leading-snug text-gray-900 opacity-70', { 'border-t bg-[#F8FAFB]': darkHeader })}
                                >
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
            <div className="my-5 flex items-center justify-between py-3">
                <Button
                    className="space-x-2 text-sm font-medium leading-tight text-gray-500"
                    variant="link"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ArrowLeft /> <span>Previous</span>
                </Button>
                <div>
                    {[...Array(pageCount).keys()].map((key) => (
                        <Button
                            key={key}
                            variant="ghost"
                            className={cn(
                                'h-10 w-10 p-3 text-center text-sm font-medium leading-tight',
                                pagination.pageIndex === key ? 'text-sky-700' : 'text-gray-500'
                            )}
                            onClick={() => table.setPageIndex(key)}
                        >
                            {key + 1}
                        </Button>
                    ))}
                </div>
                <Button
                    className="space-x-2 text-sm font-medium leading-tight text-gray-500"
                    variant="link"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <span>Next</span> <ArrowRight />
                </Button>
            </div>
        </div>
    )
}
