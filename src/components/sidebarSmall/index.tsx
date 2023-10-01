import { GitBranchIcon, GraphLineIcon, HexagonIcon } from '@/assets/svg/icons'
import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/store'
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Link, Location, useLocation } from 'react-router-dom'

interface SidebarSmallProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

interface SidebarLinkProps extends HTMLAttributes<HTMLDivElement> {
    icon: string | ReactNode
    path: string
    isActive: boolean
}

export const SidebarSmall: FC<SidebarSmallProps> = ({ className, ...props }) => {
    const [links, setLinks] = useState<SidebarLinkProps[]>([])
    const location = useLocation()
    const { sidebarActiveIconIndex, setSidebarIndex } = useAppStore((state) => state)

    const getSidebarMenus = (location: Location) => {
        const target = location.pathname.split('/')
        switch (target[1]) {
            case 'interaction-center':
                setLinks([
                    {
                        icon: assets.dashboardAlt,
                        path: '/interaction-center/dashboard',
                        isActive: ['/interaction-center/dashboard'].includes(sidebarActiveIconIndex),
                    },
                    {
                        icon: assets.chatBubble,
                        path: '/interaction-center',
                        isActive: ['/interaction-center', '/interaction-center/conversation'].includes(sidebarActiveIconIndex),
                    },
                    {
                        icon: assets.lineChartAlt,
                        path: '',
                        isActive: [''].includes(sidebarActiveIconIndex),
                    },
                ])
                break
            case 'ai-analytics':
                setLinks([
                    {
                        icon: assets.dashboardAlt,
                        path: '/ai-analytics',
                        isActive: ['/ai-analytics'].includes(sidebarActiveIconIndex),
                    },
                    {
                        icon: assets.lineChartAlt,
                        path: '',
                        isActive: [''].includes(sidebarActiveIconIndex),
                    },
                ])
                break
            case 'workflow-studio':
                setLinks([
                    {
                        icon: assets.dashboardAlt,
                        path: '/workflow-studio/',
                        isActive: ['/workflow-studio/'].includes(sidebarActiveIconIndex),
                    },
                    {
                        icon: <GitBranchIcon />,
                        path: '/workflow-studio/list',
                        isActive: ['/workflow-studio/list'].includes(sidebarActiveIconIndex),
                    },
                    {
                        icon: <GraphLineIcon />,
                        path: '/ai-analytics',
                        isActive: ['/ai-analytics'].includes(sidebarActiveIconIndex),
                    },
                    {
                        icon: <HexagonIcon />,
                        path: '',
                        isActive: [''].includes(sidebarActiveIconIndex),
                    },
                ])
                break

            default:
                break
        }
    }

    useEffect(() => {
        setSidebarIndex(location.pathname)
        getSidebarMenus(location)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, sidebarActiveIconIndex])

    return (
        <div className={cn('z-10 min-h-full w-[71px] bg-white shadow', className)} {...props}>
            <ul className="grid w-full gap-7 py-5">
                {links.map(({ path, icon }, key) => (
                    <Link
                        key={key}
                        className="mx-2.5 flex cursor-pointer items-center justify-center rounded py-2.5 transition-colors hover:bg-slate-100"
                        to={path}
                    >
                        {typeof icon === 'string' ? <img src={icon} alt="sidebar icon" /> : icon}
                    </Link>
                ))}
            </ul>
        </div>
    )
}
