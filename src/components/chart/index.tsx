/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
import { FC, HTMLAttributes, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { cn } from '@/lib/utils'
import _ from 'lodash'

export enum ChartType {
    DOUGHNUT = 'doughnut',
    PIE = 'pie',
    BAR = 'bar',
    STACKED_BAR = 'stackedBar',
    SCATTER = 'scatter',
    AREA = 'area',
    LINE = 'line',
    BAR_GROUP = 'barGroup',
}

export type PiechartDataSet = {
    name: string
    value: number
    color: string
}

interface BarChartProps {
    type: ChartType.BAR
    keys: Array<string | number>
    rotateLabel?: boolean
}

interface DoughnutChartProps {
    type: ChartType.DOUGHNUT
}

interface PieChartProps {
    type: ChartType.PIE
}

interface Scatter {
    type: ChartType.SCATTER
}

interface Area {
    type: ChartType.AREA
}

interface Line {
    type: ChartType.LINE
    keys: Array<string | number>
}

interface BarGroupProps {
    type: ChartType.BAR_GROUP
    data: any[]
}

interface StackedChartProps {
    type: ChartType.STACKED_BAR
    keys: Array<string | number>
}

interface BaseChartProps extends HTMLAttributes<HTMLDivElement> {
    name?: string
    dataSet: echarts.EChartsOption['series']
    width?: number
    height: number
    canvasWidth?: number
    canvasHeight?: number
    showCount?: boolean
}

type ChartProps = BaseChartProps & (Area | BarChartProps | DoughnutChartProps | PieChartProps | StackedChartProps | Scatter | Line | BarGroupProps)

export const Chart: FC<ChartProps> = ({ className, type, dataSet, width, height, ...props }) => {
    const chartContainerRef = useRef(null)
    const grid = (top: number = 0, right: number = 0, bottom: number = 0, left: number = 0) => ({ top, bottom, left, right, containLabel: true })
    const chartOptions = (type: ChartType) => {
        switch (type) {
            case ChartType.BAR:
                return {
                    grid: grid(10),
                    xAxis: {
                        type: 'category',
                        data: (props as BarChartProps).keys,
                        axisLabel: { interval: 0, rotate: (props as BarChartProps).rotateLabel ? 30 : 0 },
                    },
                    yAxis: {
                        type: 'value',
                    },
                }
            case ChartType.STACKED_BAR:
                return {
                    grid: grid(10),
                    xAxis: {
                        type: 'category',
                        data: (props as StackedChartProps).keys,
                        axisLabel: { interval: 0 },
                    },
                    yAxis: {
                        type: 'value',
                    },
                }
            case ChartType.SCATTER:
                return {
                    xAxis: { show: false },
                    yAxis: { show: false },
                }
            case ChartType.AREA:
                return {
                    grid: grid(10),
                    xAxis: {
                        type: 'time',
                        boundaryGap: false,
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%'],
                    },
                }
            case ChartType.BAR_GROUP:
                const { data } = props as BarGroupProps
                const dataGroup = _.groupBy(data, 'name')
                const dataSetSource = Object.entries(dataGroup).map(([key, value]) => [key, ...value.map((val) => val.value)])
                return {
                    grid: grid(10),
                    xAxis: { type: 'category' },
                    yAxis: {},
                    dataset: {
                        source: dataSetSource,
                    },
                }
            case ChartType.LINE:
                const { keys } = props as Line
                return {
                    grid: grid(10),
                    xAxis: {
                        type: 'category',
                        data: keys,
                    },
                    yAxis: {
                        type: 'value',
                    },
                }
            default:
                return {}
        }
    }

    useEffect(() => {
        if (!dataSet || !chartContainerRef.current) return
        const chartDOM = chartContainerRef.current
        const chartElement = echarts.init(chartDOM, null, { width, height })
        chartElement.setOption({ ...chartOptions(type), series: dataSet })
        const resizeChart = () => chartElement.resize()
        window.addEventListener('resize', resizeChart)

        return () => window.removeEventListener('resize', resizeChart)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartContainerRef, dataSet, width, height, type])

    return (
        <div className={cn('', className)} {...props}>
            <div ref={chartContainerRef} className="block" />
        </div>
    )
}
