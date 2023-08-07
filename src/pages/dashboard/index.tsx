import { Header } from '@/components/header'
import { Navbar, NavbarLinkProps } from '@/components/navbar'
import { assets } from '@/config/assets'
import { useAppStore } from '@/store'
import { FC, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

interface DashboardProps {
    [x: string]: any
}

const navbarLinks: NavbarLinkProps[] = [
    {
        name: 'Overview',
        icon: assets.gridViewIcon,
        children: [
            {
                name: <span className="text-[#101828]">Overview</span>,
                description: 'Manage users, roles and permissions',
                icon: assets.navOverviewIcon,
                path: '/overview',
            },
            {
                name: <span className="text-[#0CA68D]">Inbox</span>,
                description: 'Are you an agent? Get your messages',
                icon: assets.navInboxIcon,
                path: '/inbox',
            },
            {
                name: <span className="text-[#B77615]">Workflow Studio</span>,
                description: 'Build automation workflow with no code',
                icon: assets.navWorkflowIcon,
                path: '/workflow-studio',
            },
            {
                name: <span className="text-[#B715A7]">Interaction Center</span>,
                description: 'Manage, track customer interactions',
                icon: assets.navChaticon,
                path: '/interaction-center',
            },
            {
                name: <span className="text-[#40AC0E]">AI Analytics</span>,
                description: 'AI generated analytics. need to discuss',
                icon: assets.navAnalyticsIcon,
                path: '/ai-analytics',
            },
            {
                name: <span className="text-[#1815B7]">User Management</span>,
                description: 'Manage users, roles and permissions',
                icon: assets.navOverviewIcon,
                path: '/user-management',
            },
        ],
    },
]

export const Dashboard: FC<DashboardProps> = () => {
    const { authenticated } = useAppStore((state) => state)
    const navigate = useNavigate()

    useEffect(() => {
        !authenticated ? navigate('/login') : navigate('/overview')
    }, [authenticated, navigate])

    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header variant="primary" className="flex gap-[27px]">
                <img src={assets.logoIcon} alt="logo icon" />
                <Navbar links={navbarLinks} />
            </Header>
            <Outlet />
        </div>
    )
}
