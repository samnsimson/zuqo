import { FC, HTMLAttributes } from 'react'
import { WorkflowListHeader } from '../../components/workflowListHeader'

interface WorkflowListPageProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const WorkflowListPage: FC<WorkflowListPageProps> = ({ ...props }) => {
    return (
        <div {...props}>
            <WorkflowListHeader />
        </div>
    )
}
