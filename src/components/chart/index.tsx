/* eslint-disable react-refresh/only-export-components */
import { FC, HTMLAttributes, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { cn } from '@/lib/utils'

export enum ChartType {
    DOUGHNUT = 'doughnut',
    PIE = 'pie',
    BAR = 'bar',
}

export type PiechartDataSet = {
    name: string
    value: number
    color: string
}

interface BarChartProps {
    type: ChartType.BAR
    keys: Array<string | number>
}

interface DoughnutChartProps {
    type: ChartType.DOUGHNUT
}

interface PieChartProps {
    type: ChartType.PIE
}

interface BaseChartProps extends HTMLAttributes<HTMLDivElement> {
    name?: string
    dataSet: echarts.EChartsOption['series']
    width: number
    height: number
    canvasWidth?: number
    canvasHeight?: number
    showCount?: boolean
}

type ChartProps = BaseChartProps & (BarChartProps | DoughnutChartProps | PieChartProps)

export const Chart: FC<ChartProps> = ({ className, type, dataSet, width, height, ...props }) => {
    const chartContainerRef = useRef(null)

    const barChartoptions = () => {
        return type === ChartType.BAR
            ? {
                  grid: {
                      top: 10,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      containLabel: true,
                  },
                  xAxis: {
                      type: 'category',
                      data: (props as any).keys,
                      axisLabel: { interval: 0, rotate: 30 },
                  },
                  yAxis: {
                      type: 'value',
                  },
              }
            : {}
    }

    useEffect(() => {
        if (!dataSet || !chartContainerRef.current) return
        const chartDOM = chartContainerRef.current
        const chartElement = echarts.init(chartDOM, null, { width, height })
        chartElement.setOption({ ...barChartoptions(), series: dataSet })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chartContainerRef, dataSet, width, height, type])

    return (
        <div className={cn('', className)} {...props}>
            <div ref={chartContainerRef} className="block" />
        </div>
    )
}
