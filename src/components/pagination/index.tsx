import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../../ui/button'
import { usePagination } from '@/hooks/usePagination'

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    totalCount: number
    countPerPage: number
    onPageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ totalCount, countPerPage, className, onPageChange, ...props }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pagination = usePagination({ totalCount, currentPage, pageSize: countPerPage })
    const moveForward = () => setCurrentPage((currentPage) => currentPage + 1)
    const moveBackward = () => setCurrentPage((currentPage) => currentPage - 1)

    useEffect(() => {
        if (!onPageChange) return
        onPageChange(currentPage)
    }, [currentPage, onPageChange])

    if (!pagination) return null
    const lastPage = pagination[pagination.length - 1]

    return (
        <div {...props} className={cn('flex items-center justify-between border-t-[1px] border-gray-200 p-4', className)}>
            <div className="prose text-sm tracking-wide text-gray-600">
                <p>
                    Page <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{lastPage}</span>
                </p>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-3">
                <Button variant="ghost" onClick={moveBackward} disabled={currentPage <= 1} className="space-x-3">
                    <ArrowLeft /> <span>Previous</span>
                </Button>
                {pagination &&
                    pagination.map((page, key) => (
                        <Button
                            key={key}
                            variant={currentPage === page ? 'secondary' : 'ghost'}
                            onClick={() => page !== '...' && setCurrentPage(Number(page))}
                            className={cn({ 'font-semibold text-sky-500': currentPage === page })}
                        >
                            {page}
                        </Button>
                    ))}
                <Button variant="ghost" onClick={moveForward} disabled={currentPage >= Number(lastPage)} className="space-x-3">
                    <span>Next</span> <ArrowRight />
                </Button>
            </div>
        </div>
    )
}
