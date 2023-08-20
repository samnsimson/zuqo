import { FC, HTMLAttributes, ReactNode, useMemo } from 'react'
import { WorkflowListHeader } from '../../components/workflowListHeader'
import { ColumnProps, DataTable } from '@/components/dataTable'
import { workflowList } from '@/mock-data/workflow-list'
import { NameAndDescription } from '../../components/nameAndDescription'
import { BadgeCustom } from '@/components/badgeCustom'
import { AvatarGroup } from '@/components/avatarGroup'
import { StatusBadge } from '../../components/statusBadge'
import { ActionButton } from '../../components/actionButton'
import { EditActionIcon, MoreActionIcon, TestActionIcon } from '@/assets/svg/icons'

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

const ActionList: FC<{ id: string | number }> = ({ id }) => {
    return (
        <div className="flex space-x-[25px]">
            <ActionButton label="Edit" icon={<EditActionIcon />} onClick={() => console.log(id)} />
            <ActionButton label="Test" icon={<TestActionIcon />} onClick={() => console.log(id)} />
            <ActionButton label="More" icon={<MoreActionIcon />} onClick={() => console.log(id)} />
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
            <DataTable columns={tableColumns} data={tableData} className="bg-white" />
        </div>
    )
}
