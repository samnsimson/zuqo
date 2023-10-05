import { MoreActionIcon } from '@/assets/svg/icons'
import { Chart, ChartType } from '@/components/chart'
import { ChartContainer } from '@/components/chartContainer'
import { ColumnProps, DataTable } from '@/components/dataTable'
import { Card, CardContent } from '@/components/ui/card'
import { useChartData } from '@/hooks/useChartData'
import { cn } from '@/lib/utils'
import { SuccessfulInteractionData, errorRateData, interactionMonitoringData, successRateData } from '@/mock-data/chart-data'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { v4 as uuid } from 'uuid'

interface WorkflowAnalyticsPageProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

interface WorkflowStatProps extends HTMLAttributes<HTMLDivElement> {}
interface RealtimeInteractionMonitoringProps extends HTMLAttributes<HTMLDivElement> {
    chartData: any
    keys: Array<string>
}
interface SuccessRateProps extends HTMLAttributes<HTMLDivElement> {
    chartData: any
    keys: Array<string>
}
interface SuccessfulInteractionProps extends HTMLAttributes<HTMLDivElement> {
    chartData: any
}
interface ErrorRateProps extends HTMLAttributes<HTMLDivElement> {
    chartData: any
    data: any
}
interface GeographicalDistributionProps extends HTMLAttributes<HTMLDivElement> {
    chartData: any
}
interface LiveWorkflowSnapshotProps extends HTMLAttributes<HTMLDivElement> {}

const WorkflowStats: FC<WorkflowStatProps> = ({ className, ...props }) => {
    return (
        <Card className={cn('', className)} {...props}>
            <CardContent className="grid grid-cols-5 gap-20 p-8">
                <div className="col-span-1 space-y-3">
                    <div className="col-span-2 font-jakarta text-base font-medium text-gray-600 opacity-60">Active Workflows in Production</div>
                    <div className="flex items-center justify-between">
                        <div className="col-span-1">
                            <span className="font-jakarta text-lg font-medium text-gray-600">IVR: </span>
                            <span className="font-jakarta text-lg font-semibold text-pink-700">03</span>
                        </div>
                        <div className="col-span-1">
                            <span className="font-jakarta text-lg font-medium text-gray-600">Message Bots: </span>
                            <span className="font-jakarta text-lg font-semibold text-pink-700">02</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-3">
                    <div className="col-span-2 font-jakarta text-base font-medium text-gray-600 opacity-60">Successful Interactions</div>
                    <div className="flex items-center justify-between">
                        <div className="col-span-1">
                            <span className="font-jakarta text-lg font-medium text-gray-600">IVR: </span>
                            <span className="font-jakarta text-lg font-semibold text-pink-700">335</span>
                        </div>
                        <div className="col-span-1">
                            <span className="font-jakarta text-lg font-medium text-gray-600">Message Bots: </span>
                            <span className="font-jakarta text-lg font-semibold text-pink-700">938</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-3">
                    <div className="font-jakarta text-base font-medium text-gray-900 opacity-60">Success Rate</div>
                    <div className="font-jakarta text-lg font-semibold text-pink-700">89%</div>
                </div>
                <div className="col-span-1 space-y-3">
                    <div className="font-jakarta text-base font-medium text-gray-900 opacity-60">Unresponsive Workflows</div>
                    <div className="font-jakarta text-lg font-semibold text-pink-700">None</div>
                </div>
                <div className="col-span-1 space-y-3">
                    <div className="font-jakarta text-base font-medium text-gray-900 opacity-60">Error</div>
                    <div className="font-jakarta text-lg font-semibold text-red-600">04</div>
                </div>
            </CardContent>
        </Card>
    )
}

export const RealtimeInteractionMonitoring: FC<RealtimeInteractionMonitoringProps> = ({ className, chartData, keys, ...props }) => {
    return (
        <ChartContainer title="Real-Time Interaction Monitoring" className={cn('', className)} {...props}>
            <Chart dataSet={chartData} name="Real time monitoring" type={ChartType.LINE} keys={keys} height={450} />
        </ChartContainer>
    )
}

export const SuccessRate: FC<SuccessRateProps> = ({ className, chartData, keys, ...props }) => {
    return (
        <ChartContainer title="Success Rate" className={cn('', className)} {...props}>
            <Chart dataSet={chartData} height={450} type={ChartType.STACKED_BAR} keys={keys} />
        </ChartContainer>
    )
}

export const SuccessfulInteraction: FC<SuccessfulInteractionProps> = ({ className, chartData, ...props }) => {
    return (
        <ChartContainer className={cn('', className)} {...props} title="Successful Interactions">
            <Chart type={ChartType.BAR} name="Successfull Interaction" dataSet={chartData} height={450} keys={SuccessfulInteractionData.map((x) => x.name)} />
        </ChartContainer>
    )
}

export const ErrorRate: FC<ErrorRateProps> = ({ className, chartData, data, ...props }) => {
    return (
        <ChartContainer className={cn('', className)} {...props} title="Error Rate">
            <Chart type={ChartType.BAR_GROUP} name="Error Rate" dataSet={chartData} height={450} data={data} />
        </ChartContainer>
    )
}

export const GeographicalDistribution: FC<GeographicalDistributionProps> = ({ className, ...props }) => {
    return <ChartContainer className={cn('', className)} {...props} title="Geographical Distribution"></ChartContainer>
}

const WorkflowName: FC<{ idx: number }> = ({ idx }) => {
    return (
        <div>
            <div className="font-inter text-sm font-medium text-slate-800">{`Workflow ${idx}`}</div>
            <div className="font-inter text-sm font-normal tracking-wide text-slate-500">An IVR workflow to lorem...</div>
        </div>
    )
}

const WorkflowType: FC = () => {
    return (
        <div className="space-y-[6px]">
            <div className="inline-flex  items-center justify-center gap-2.5 rounded bg-gray-50 px-2.5 py-[5px]">
                <div className="font-jakarta text-xs font-bold tracking-wider text-sky-700">IVR</div>
            </div>
            <div className="font-inter text-xs font-medium text-slate-500">Deployed on: 14/APR/2020</div>
        </div>
    )
}
const SuccessRateContent: FC<{ val: string }> = ({ val }) => {
    return (
        <div>
            <div className="font-inter text-sm font-semibold uppercase text-emerald-700">{val}</div>
            <div className="font-inter text-xs font-normal text-slate-500">Last week 87%</div>
        </div>
    )
}

const ErrorRateContent: FC<{ val: string }> = ({ val }) => {
    return (
        <div>
            <div className="font-inter text-sm font-semibold uppercase text-red-600">{val}</div>
            <div className="font-inter text-xs font-normal text-slate-500">Last week 03%</div>
        </div>
    )
}

const AvgRespTime: FC<{ val: string }> = ({ val }) => {
    return (
        <div>
            <div className="font-inter text-sm font-semibold uppercase text-gray-600">{val}</div>
            <div className="font-inter text-xs font-normal text-slate-500">Target: 10 sec</div>
        </div>
    )
}

const Satisfaction: FC<{ val: string }> = ({ val }) => {
    return (
        <div>
            <div className="font-inter text-sm font-semibold uppercase text-green-700">{val}</div>
            <div className="font-inter text-xs font-normal text-slate-500">Last week 87%</div>
        </div>
    )
}

export const LiveWorkflowSnapshot: FC<LiveWorkflowSnapshotProps> = ({ className, ...props }) => {
    const tableColumns: ColumnProps<string, string | ReactNode>[] = [
        { key: 'workflow_name', value: 'Workflow Name' },
        { key: 'workflow_type', value: 'Workflow Type' },
        { key: 'success_rate', value: 'Success Rate' },
        { key: 'error_rate', value: 'Error Rate' },
        { key: 'avg_response_time', value: 'Avg Response Time' },
        { key: 'customer_satisfaction', value: 'Customer Satisfaction' },
        { key: 'actions', value: null },
    ]

    const tableData = [...Array(8)].map((_, key) => ({
        id: uuid(),
        workflow_name: <WorkflowName idx={key + 1} />,
        workflow_type: <WorkflowType />,
        success_rate: <SuccessRateContent val="89%" />,
        error_rate: <ErrorRateContent val="02%" />,
        avg_response_time: <AvgRespTime val="8.2" />,
        customer_satisfaction: <Satisfaction val="Super Happy - 98%" />,
        actions: <MoreActionIcon />,
    }))

    return (
        <ChartContainer className={cn('', className)} {...props} title="Live Workflows Snapshot" bodyClass="px-0">
            <DataTable columns={tableColumns} data={tableData} darkHeader headerClass="uppercase text-[#6E6893] font-semibold tracking-[0.6px]" />
        </ChartContainer>
    )
}

export const WorkflowAnalyticsPage: FC<WorkflowAnalyticsPageProps> = ({ ...props }) => {
    const erroRateDataset = errorRateData()
    const { dataset: datasetOne } = useChartData({ type: 'BAR', name: 'sucessfull interaction', data: SuccessfulInteractionData })
    const { dataset: datasetTwo } = useChartData({ type: 'STACKED_BAR', name: 'sucessfull interaction', data: successRateData })
    const { dataset: datasetThree } = useChartData({ type: 'BAR_GROUP', name: 'sucessfull interaction', data: erroRateDataset })
    const { dataset: datasetFour } = useChartData({ type: 'LINE', name: 'interaction monitoring', data: interactionMonitoringData })
    return (
        <div {...props} className="grid grid-cols-12 gap-4 p-4">
            <WorkflowStats className="col-span-12" />
            <RealtimeInteractionMonitoring className="col-span-6" chartData={datasetFour} keys={[...new Set(interactionMonitoringData.map((x) => x.name))]} />
            <SuccessRate className="col-span-6" chartData={datasetTwo} keys={[...new Set(successRateData.map((x) => x.name))]} />
            <SuccessfulInteraction className="col-span-4" chartData={datasetOne} />
            <ErrorRate className="col-span-4" chartData={datasetThree} data={erroRateDataset} />
            <GeographicalDistribution className="col-span-4" chartData={datasetOne} />
            <LiveWorkflowSnapshot className="col-span-12" />
        </div>
    )
}
