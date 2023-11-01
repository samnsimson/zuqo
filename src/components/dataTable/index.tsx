import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { cn } from '@/lib/utils'
import { useNavigate } from 'react-router-dom'
import { Pagination } from '../pagination'

export type ColumnProps<T, K> = {
    key: T
    value: K
    sortable?: boolean
}

interface DataTableProps<TData, TColumns extends ColumnProps<any, any>> extends HTMLAttributes<HTMLDivElement> {
    darkHeader?: boolean
    headerClass?: string
    columns: TColumns[]
    data: TData[]
    emptyDataComponent?: ReactNode
    pageChange: (page: number) => void
}

export function DataTable<TData, TColumns extends ColumnProps<any, any>>({
    columns: cols,
    data,
    className,
    darkHeader,
    headerClass,
    emptyDataComponent = null,
    pageChange,
    ...props
}: DataTableProps<TData, TColumns>) {
    const [columns, setColumns] = useState<ColumnDef<TData>[]>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: { columnVisibility: { link: false } },
    })
    const headerGroups = table.getHeaderGroups()
    const { rows } = table.getRowModel()
    const navigate = useNavigate()

    const handleNavigation = (path: string) => {
        if (!path || ['#'].includes(path)) return
        navigate(path)
    }

    useEffect(() => {
        setColumns(
            cols.map(
                ({ key, value, sortable = false }): ColumnDef<TData> => ({
                    accessorKey: key,
                    header: value,
                    cell: ({ row }) => <div>{row.getValue(key)}</div>,
                    enableSorting: sortable,
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
                                    className={cn(
                                        'text-xs font-normal leading-snug text-gray-900 opacity-70',
                                        { 'border-t bg-[#F8FAFB]': darkHeader },
                                        headerClass
                                    )}
                                >
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {rows.length ? (
                        rows.map((row) => {
                            return (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && 'selected'}
                                    className={cn({ 'cursor-pointer': row.getValue('link') })}
                                    onClick={() => handleNavigation(row.getValue('link'))}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="p-3">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )
                        })
                    ) : (
                        <TableRow className="hover:bg-transparent">
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                {emptyDataComponent || 'No results.'}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Pagination total={100} countPerPage={10} onPageChange={pageChange} />
        </div>
    )
}
