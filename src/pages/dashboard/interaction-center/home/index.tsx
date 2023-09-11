import { SidebarLayout } from '@/layouts/sidebarLayout'
import { FC, HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

interface InteractionCenterHomeProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const InteractionCenterHome: FC<InteractionCenterHomeProps> = ({ ...props }) => {
    return (
        <SidebarLayout {...props}>
            <Outlet />
        </SidebarLayout>
    )
}
