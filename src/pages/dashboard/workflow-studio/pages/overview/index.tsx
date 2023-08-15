import { FC, HTMLAttributes } from 'react'
import { WorkflowOverview } from '../../components/workflowOverview'
import { RecentWorkflows } from '../../components/recentWorkflows'
import { GuideDocs } from '../../components/guideDocs'

interface WorkFlowOverviewPageProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const WorkFlowOverviewPage: FC<WorkFlowOverviewPageProps> = ({ ...props }) => {
    return (
        <div {...props}>
            <WorkflowOverview />
            <div className="mx-auto mb-5 mt-[33px] flex w-[967px] flex-col justify-start gap-4">
                <RecentWorkflows />
                <GuideDocs />
            </div>
        </div>
    )
}
