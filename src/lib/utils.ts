import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import moment from 'moment-timezone'
import { v4 as uuid } from 'uuid'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const secondsToHms = (seconds: number): string => {
    return moment.utc(seconds * 1000).format('mm:ss')
}

export const uniqueBy = (data: any[], key: string) => {
    return [...new Map(data.map((item) => [item[key], item])).values()]
}

export const splitLeaderboard = (data: any) => {
    const sortedData = data.sort((a: any, b: any) => b.points - a.points)
    const topThree = sortedData.slice(0, 3)
    const rest = sortedData.slice(3)
    return { topThree, rest }
}

export const sortByIndex = <T extends [string, undefined | { index?: number }][]>(entries: T) => {
    entries.sort((a, b) => {
        const ai = a[1]?.index || 0
        const bi = b[1]?.index || 0
        return ai - bi
    })
}

export const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
}

export const dateTime = (dateTime: Date | string, timeZone: 'UTC' | 'IST' = 'UTC', displayTime: boolean = true) => {
    const date = moment(dateTime)
    const format = `DD/MM/YYYY ${displayTime && 'hh:mm:ss'}`
    const tz = timeZone === 'UTC' ? 'Europe/London' : timeZone === 'IST' ? 'Asia/Kolkata' : 'Europe/London'
    return date.tz(tz).format(format)
}

export const workflowId = () => uuid()
