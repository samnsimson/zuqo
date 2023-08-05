import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import moment from 'moment'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const secondsToHms = (seconds: number): string => {
    return moment.utc(seconds * 1000).format('mm:ss')
}
