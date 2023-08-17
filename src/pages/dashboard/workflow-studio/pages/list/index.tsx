import { FC, HTMLAttributes, ReactNode } from 'react'
import { WorkflowListHeader } from '../../components/workflowListHeader'
import { ColumnProps, DataTable } from '@/components/dataTable'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { assets } from '@/config/assets'

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

const NameAndDescription: FC<{ name: string; description: string }> = ({ name, description }) => {
    return (
        <div className="flex w-full flex-col space-y-3">
            <div className="text-sm font-semibold text-sky-700">{name}</div>
            <div className="w-[261px] text-sm font-normal leading-snug text-gray-900 opacity-70">{description}</div>
        </div>
    )
}

const BadgeCustom: FC<{ value: string | number }> = ({ value }) => {
    return (
        <div className="inline-flex h-[25px] items-center justify-center gap-2.5 rounded bg-gray-50 px-2.5 py-[5px]">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">{value}</div>
        </div>
    )
}

const AvatarCustom: FC<{ src: string }> = ({ src }) => {
    return (
        <Avatar>
            <AvatarImage src={src} />
        </Avatar>
    )
}

export const WorkflowListPage: FC<WorkflowListPageProps> = ({ ...props }) => {
    const tableColumns: ColumnProps<string, string | ReactNode>[] = [
        { key: 'name', value: 'Name & Description' },
        { key: 'workflow_type', value: 'Workflow Type' },
        { key: 'assigned_to', value: 'Assigned To' },
        { key: 'status', value: 'Status' },
        { key: 'version', value: 'Version' },
        { key: 'open_since', value: 'Open Since' },
        { key: 'created_on', value: 'Created On' },
        { key: 'actions', value: 'Actions' },
    ]
    const tableData: TableData[] = [
        {
            name: <NameAndDescription name="My First IVR Flow" description="Description of workflow comes here in max of two lines with ellipses" />,
            workflow_type: <BadgeCustom value="IVR" />,
            assigned_to: <AvatarCustom src={assets.kiranmaiKulakarni} />,
            status: <Badge className="uppercase">Draft</Badge>,
            version: 'v1.3',
            open_since: '3 days',
            created_on: 'Jul 20',
            actions: '',
        },
        {
            name: <NameAndDescription name="Messaging Bot" description="Description of workflow comes here in max of two lines with ellipses" />,
            workflow_type: <BadgeCustom value="Chat Bot" />,
            assigned_to: <AvatarCustom src={assets.kiranmaiKulakarni} />,
            status: <Badge className="uppercase">Live</Badge>,
            version: 'v1.3',
            open_since: 'Deployed on May 30',
            created_on: 'Jul 20',
            actions: '',
        },
        {
            name: <NameAndDescription name="Customer Survey" description="Description of workflow comes here in max of two lines with ellipses" />,
            workflow_type: <BadgeCustom value="Survey" />,
            assigned_to: <AvatarCustom src={assets.preetham} />,
            status: <Badge className="uppercase">Under Review</Badge>,
            version: 'v1.3',
            open_since: '10 hours',
            created_on: 'Jul 20',
            actions: '',
        },
    ]

    return (
        <div {...props}>
            <WorkflowListHeader />
            <DataTable columns={tableColumns} data={tableData} />
        </div>
    )
}
