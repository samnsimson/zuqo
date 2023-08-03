import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { Card } from './ui/card'
import { SummaryCardHeader } from './summaryCardHeader'
import { Skeleton } from './ui/skeleton'

interface RecentActivitySummaryProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const SkeletonLoader = () => {
    return (
        <div className="flex items-center space-x-4 px-4 py-1">
            <Skeleton className="h-6 w-6 rounded-full" />
            <div className="w-full space-y-2">
                <Skeleton className="h-2 w-3/4" />
                <Skeleton className="h-2 w-2/4" />
            </div>
        </div>
    )
}

export const RecentActivitySummary: FC<RecentActivitySummaryProps> = ({ className, ...props }) => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        setActivities([])
    }, [])

    return (
        <Card className={cn('', className)} {...props}>
            <SummaryCardHeader title="Recent Activity" />
            {!activities.length && (
                <div className="grid w-full gap-4">
                    {[...Array(4)].map((key) => (
                        <SkeletonLoader key={key} />
                    ))}
                </div>
            )}
        </Card>
    )
}
