import { SidebarLayout } from '@/layouts/sidebarLayout'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface WorkflowStudioProps {
    [x: string]: any
}

export const WorkflowStudio: FC<WorkflowStudioProps> = () => {
    return (
        <SidebarLayout>
            <Outlet />
        </SidebarLayout>
    )
}
