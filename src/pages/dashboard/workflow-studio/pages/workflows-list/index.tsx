import { EditActionIcon, IvrPhoneIcon, MoreActionIcon, TestActionIcon } from '@/assets/svg/icons'
import { ColumnProps, DataTable } from '@/components/dataTable'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { workflowList } from '@/mock-data/workflow-list'
import _ from 'lodash'
import { ArrowLeft } from 'lucide-react'
import { FC, HTMLAttributes, ReactNode, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NameAndDescription } from '../../components/nameAndDescription'
import { BadgeCustom } from '@/components/badgeCustom'
import { AvatarGroup } from '@/components/avatarGroup'
import { StatusBadge } from '../../components/statusBadge'
import { ActionButton } from '../../components/actionButton'
import { NewWorkflowButton } from '@/components/newWorkflowButton'

interface WorkflowFilteredListProps extends HTMLAttributes<HTMLDivElement> {
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

export const WorkflowFilteredList: FC<WorkflowFilteredListProps> = ({ className, ...props }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [workflowType, setWorkflowType] = useState<string | null>(null)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)
    const [workflows, setWorkflows] = useState<any[]>([])
    const [filters, setFilters] = useState<string[]>([])

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        setWorkflowType(params.get('type'))
    }, [location])

    useEffect(() => {
        if (!workflowType) return
        setWorkflows(workflowList.filter((x) => x.type.toLowerCase() === workflowType.toLowerCase()))
    }, [workflowType])

    useEffect(() => {
        setFilters([
            'All Workflows',
            ...new Set(
                workflows.map(({ status }) =>
                    status
                        .split(' ')
                        .map((x: string) => _.capitalize(x))
                        .join(' ')
                )
            ),
        ])
    }, [workflows])

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
            workflows.map((workflow) => ({
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
        [workflows]
    )

    return (
        <div className={cn('grid grid-cols-12 py-8', className)} {...props}>
            <div className="col-span-10 col-start-2">
                <Card className="w-full overflow-hidden">
                    <img src={assets.largeRectangleBorder} alt="" className="w-full" />
                    <CardHeader className="flex flex-row items-center justify-between space-x-4 space-y-0">
                        <div className="flex items-center space-x-4">
                            <ArrowLeft className="text-[#4E545F]" onClick={() => navigate(-1)} />
                            <div className="flex items-center space-x-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600">
                                    <IvrPhoneIcon />
                                </div>
                                <div className="space-y-1">
                                    <div className="font-inter text-xl font-semibold text-yellow-600">IVR</div>
                                    <div className="font-inter text-xs font-normal text-black">Streamline interactions. Enhance efficiency.</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2.5">
                            {filters.map((el, key) => (
                                <Button
                                    key={key}
                                    variant={activeFilter === el ? 'primary' : 'outline'}
                                    className={cn('bg-slate-50 font-jakarta')}
                                    onClick={() => setActiveFilter(el)}
                                >
                                    {el}
                                </Button>
                            ))}
                            <NewWorkflowButton />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <DataTable columns={tableColumns} data={tableData} className="my-0 bg-white shadow" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
