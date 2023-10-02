import { Chart, ChartType } from '@/components/chart'
import { ChartContainer } from '@/components/chartContainer'
import { Card, CardContent } from '@/components/ui/card'
import { useChartData } from '@/hooks/useChartData'
import { cn } from '@/lib/utils'
import { SuccessfulInteractionData, errorRateData, interactionMonitoringData, successRateData } from '@/mock-data/chart-data'
import { FC, HTMLAttributes } from 'react'

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

export const LiveWorkflowSnapshot: FC<LiveWorkflowSnapshotProps> = ({ className, ...props }) => {
    return <ChartContainer className={cn('', className)} {...props} title="Live Workflows Snapshot"></ChartContainer>
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
