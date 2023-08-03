import { FC } from 'react'

interface DashboardFooterProps {
    [x: string]: any
}

export const DashboardFooter: FC<DashboardFooterProps> = () => {
    return <div className="flex min-h-[76px] items-center justify-center text-[#98A2B3]">&copy; 2023 Zuqo Corporation. All rights reserved.</div>
}
