import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { SummaryCardHeader } from './summaryCardHeader'

interface YourTasksSummaryProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const NoTaskTemplate = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-3">
            <img src="task-pad.svg" alt="task pad" />
            <div className="flex flex-col items-center gap-6">
                <p className="text-gray-600">Catch a Breath: No Tasks in Sight!</p>
                <p className="text-center text-xs text-gray-500">
                    Stay on Top of Your Tasks: Instantly Access Priority Assignments and Important Notifications – Never Miss a Beat!
                </p>
            </div>
        </div>
    )
}

export const YourTasksSummary: FC<YourTasksSummaryProps> = ({ className, ...props }) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks([])
    }, [])

    return (
        <Card className={cn('', className)} {...props}>
            <SummaryCardHeader title="Your Tasks" />
            <CardContent>{!tasks.length && <NoTaskTemplate />}</CardContent>
        </Card>
    )
}
