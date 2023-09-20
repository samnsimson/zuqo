/* eslint-disable react-refresh/only-export-components */
import { FC, HTMLAttributes, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { cn } from '@/lib/utils'

export enum ChartType {
    DOUGHNUT = 'doughnut',
    PIE = 'pie',
    BAR = 'bar',
    STACKED_BAR = 'stackedBar',
    SCATTER = 'scatter',
    LINE = 'line',
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

interface Line {
    type: ChartType.LINE
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

type ChartProps = BaseChartProps & (BarChartProps | DoughnutChartProps | PieChartProps | StackedChartProps | Scatter | Line)

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
                        data: (props as any).keys,
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
            case ChartType.LINE:
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
            default:
                return {}
        }
    }

    useEffect(() => {
        if (!dataSet || !chartContainerRef.current) return
        const chartDOM = chartContainerRef.current
        const chartElement = echarts.init(chartDOM, null, { width, height })
        console.log('chart optinos', { ...chartOptions(type), series: dataSet })
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
