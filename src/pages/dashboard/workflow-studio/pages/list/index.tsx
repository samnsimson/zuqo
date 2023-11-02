import { FC, HTMLAttributes, ReactNode, useMemo } from 'react'
import { WorkflowListHeader } from '../../components/workflowListHeader'
import { ColumnProps, DataTable } from '@/components/dataTable'
import { workflowList } from '@/mock-data/workflow-list'
import { NameAndDescription } from '../../components/nameAndDescription'
import { BadgeCustom } from '@/components/badgeCustom'
import { AvatarGroup } from '@/components/avatarGroup'
import { StatusBadge } from '../../components/statusBadge'
import { ActionButton } from '../../components/actionButton'
import { ActiveWorkflowIcon, CheckIcon, ClockIcon, EditActionIcon, MoreActionIcon, TestActionIcon } from '@/assets/svg/icons'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

interface WorkflowListPageProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

interface TableData {
    name: string | ReactNode
    workflow_type: string | ReactNode
    assigned_to: string | ReactNode
    status: string | ReactNode
    version: string | ReactNode
    open_since: string | ReactNode
    created_on: string | ReactNode
    actions: string | ReactNode
}

const ActionList: FC<{ id: string | number }> = () => {
    return (
        <div className="flex space-x-[25px]">
            <ActionButton type="link" link="#" label="Edit" icon={<EditActionIcon />} />
            <ActionButton type="link" link="#" label="Test" icon={<TestActionIcon />} />
            <ActionButton type="link" link="#" label="More" icon={<MoreActionIcon />} />
        </div>
    )
}

export const WorkflowListPage: FC<WorkflowListPageProps> = ({ ...props }) => {
    const tableColumns: ColumnProps<string, string | ReactNode>[] = [
        { key: 'name', value: 'Name & Description', sortable: true },
        { key: 'workflow_type', value: 'Workflow Type' },
        { key: 'assigned_to', value: 'Assigned To' },
        { key: 'status', value: 'Status' },
        { key: 'version', value: 'Version' },
        { key: 'open_since', value: 'Open Since' },
        { key: 'created_on', value: 'Created On' },
        { key: 'actions', value: 'Actions' },
    ]

    const tableData: TableData[] = useMemo(
        () =>
            workflowList.map((workflow) => ({
                id: workflow.id,
                name: <NameAndDescription name={workflow.name} description={workflow.description} />,
                workflow_type: <BadgeCustom value={workflow.type} />,
                assigned_to: <AvatarGroup src={workflow.assignedTo} />,
                status: <StatusBadge status={workflow.status} />,
                version: workflow.version,
                open_since: workflow.openSince,
                created_on: workflow.createdOn,
                actions: <ActionList id={workflow.id} />,
            })),
        []
    )

    return (
        <div {...props}>
            <WorkflowListHeader />
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <ul className="flex flex-col gap-y-4 px-2 py-4">
                        <Link to="#" className="group flex items-center gap-x-3 rounded px-4 py-1 hover:bg-sky-700 hover:bg-opacity-5">
                            <ActiveWorkflowIcon />
                            <div className="font-jakarta text-sm font-medium text-gray-900 group-hover:font-bold group-hover:text-pink-700">
                                Active Workflows
                            </div>
                        </Link>
                        <Link to="#" className="group flex items-center gap-x-3 rounded px-4 py-1 hover:bg-sky-700 hover:bg-opacity-5">
                            <User />
                            <div className="font-jakarta text-sm font-medium text-gray-900 group-hover:font-bold group-hover:text-pink-700">Assigned to Me</div>
                        </Link>
                        <Link to="#" className="group flex items-center gap-x-3 rounded px-4 py-1 hover:bg-sky-700 hover:bg-opacity-5">
                            <ClockIcon />
                            <div className="font-jakarta text-sm font-medium text-gray-900 group-hover:font-bold group-hover:text-pink-700">Overdue</div>
                        </Link>
                        <Link to="#" className="group flex items-center gap-x-3 rounded px-4 py-1 hover:bg-sky-700 hover:bg-opacity-5">
                            <CheckIcon />
                            <div className="font-jakarta text-sm font-medium text-gray-900 group-hover:font-bold group-hover:text-pink-700">
                                Recently Completed
                            </div>
                        </Link>
                    </ul>
                </div>
                <div className="col-span-10">
                    <DataTable columns={tableColumns} data={tableData} className="bg-white shadow" pageChange={() => null} />
                </div>
            </div>
        </div>
    )
}
