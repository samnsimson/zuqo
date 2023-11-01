import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    total: number
    countPerPage: number
    onPageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ total, countPerPage, className, onPageChange, ...props }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [noOfPages] = useState(Math.ceil(total / countPerPage))
    const moveForward = () => setCurrentPage((currentPage) => currentPage + 1)
    const moveBackward = () => setCurrentPage((currentPage) => currentPage - 1)

    useEffect(() => {
        if (!onPageChange) return
        onPageChange(currentPage)
    }, [currentPage, onPageChange])

    return (
        <div {...props} className={cn('flex items-center justify-between p-4', className)}>
            <Button variant="ghost" onClick={moveBackward}>
                <ArrowLeft />
            </Button>
            <div className="flex items-center justify-center space-x-3">
                {[...Array(noOfPages)].map((_, idx) => (
                    <Button variant="ghost" onClick={() => setCurrentPage(idx + 1)}>
                        {idx + 1}
                    </Button>
                ))}
            </div>
            <Button variant="ghost" onClick={moveForward}>
                <ArrowRight />
            </Button>
        </div>
    )
}
