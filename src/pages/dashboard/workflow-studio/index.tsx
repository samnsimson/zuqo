import { SidebarLayout } from '@/layouts/sidebarLayout'
import { FC } from 'react'
import { WorkflowOverview } from './workflowOverview'
import { RecentWorkflows } from './recentWorkflows'
import { GuideDocs } from './guideDocs'

interface WorkflowStudioProps {
    [x: string]: any
}

export const WorkflowStudio: FC<WorkflowStudioProps> = () => {
    return (
        <SidebarLayout>
            <WorkflowOverview />
            <div className="mx-auto mb-5 mt-[33px] flex w-[967px] flex-col justify-start gap-4">
                <RecentWorkflows />
                <GuideDocs />
            </div>
        </SidebarLayout>
    )
}
