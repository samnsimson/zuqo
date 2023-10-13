import { RefreshIcon } from '@/assets/svg/icons'
import { FilterButton } from '@/components/filterButton'
import { NewWorkflowButton } from '@/components/newWorkflowButton'
import * as constants from '@/constants/constants'
import { FC, HTMLAttributes } from 'react'

interface WorkflowListHeaderProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const WorkflowListHeader: FC<WorkflowListHeaderProps> = ({ ...props }) => {
    return (
        <div className="relative flex h-[52px] w-full items-center justify-between bg-white px-2 py-4 shadow" {...props}>
            <div>
                <div className="text-base font-bold text-[#00539F]">Workflows</div>
            </div>
            <div className="flex items-center justify-evenly space-x-[9px]">
                <RefreshIcon />
                <FilterButton label="Type" value={constants.TYPE_FILTER_VALUES} />
                <FilterButton label="Status" value={constants.STATUS_FILTER_VALUES} />
                <FilterButton label="Assigned by" value={constants.ASSIGNED_BY_FILTER_VALUES} />
                <FilterButton label="Assignee" multiselect={true} value={constants.ASSIGNEE_FILTER_VALUES} />
                <FilterButton label="Channel" value={constants.CHANNEL_FILTER_VALUES} />
                <FilterButton label="More Filters" value={constants.MORE_FILTER_VALUES} />
                <NewWorkflowButton />
            </div>
        </div>
    )
}
