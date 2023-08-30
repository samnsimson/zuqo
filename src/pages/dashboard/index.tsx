import { Header } from '@/components/header'
import { Navbar, NavbarLinkProps } from '@/components/navbar'
import { assets } from '@/config/assets'
import { useAppStore } from '@/store'
import { FC, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as GridViewIcon } from '@/assets/grid-view-icon.svg'
import { ReactComponent as NavOverviewIcon } from '@/assets/nav-overview-icon.svg'
import { ReactComponent as NavInboxIcon } from '@/assets/nav-inbox-icon.svg'
import { ReactComponent as NavWorkflowIcon } from '@/assets/nav-workflow-icon.svg'
import { ReactComponent as NavChatIcon } from '@/assets/nav-chat-icon.svg'
import { ReactComponent as NavAnalyticsIcon } from '@/assets/nav-analytics-icon.svg'

interface DashboardProps {
    [x: string]: any
}

const navbarLinks: NavbarLinkProps[] = [
    {
        label: 'Overview',
        name: 'Overview',
        icon: ({ strokeColor }) => <GridViewIcon stroke={strokeColor || '#fff'} />,
        children: [
            {
                label: 'Overview',
                name: <span className="text-[#101828]">Overview</span>,
                description: 'Manage users, roles and permissions',
                icon: ({ strokeColor }) => <NavOverviewIcon stroke={strokeColor || '#fff'} />,
                path: '/',
            },
            {
                label: 'Inbox',
                name: <span className="text-[#0CA68D]">Inbox</span>,
                description: 'Are you an agent? Get your messages',
                icon: ({ strokeColor }) => <NavInboxIcon stroke={strokeColor || '#fff'} />,
                path: '/inbox',
            },
            {
                label: 'Workflow Studio',
                name: <span className="text-[#B77615]">Workflow Studio</span>,
                description: 'Build automation workflow with no code',
                icon: ({ strokeColor }) => <NavWorkflowIcon stroke={strokeColor || '#fff'} />,
                path: '/workflow-studio',
            },
            {
                label: 'Interaction Center',
                name: <span className="text-[#B715A7]">Interaction Center</span>,
                description: 'Manage, track customer interactions',
                icon: ({ strokeColor }) => <NavChatIcon stroke={strokeColor || '#fff'} />,
                path: '/interaction-center',
            },
            {
                label: 'AI Analytics',
                name: <span className="text-[#40AC0E]">AI Analytics</span>,
                description: 'AI generated analytics. need to discuss',
                icon: ({ strokeColor }) => <NavAnalyticsIcon stroke={strokeColor || '#fff'} />,
                path: '/ai-analytics',
            },
            {
                label: 'User Management',
                name: <span className="text-[#1815B7]">User Management</span>,
                description: 'Manage users, roles and permissions',
                icon: ({ strokeColor }) => <NavOverviewIcon stroke={strokeColor || '#fff'} />,
                path: '/user-management',
            },
        ],
    },
]

export const Dashboard: FC<DashboardProps> = () => {
    const { authenticated } = useAppStore((state) => state)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!authenticated) navigate('/login')
    }, [authenticated, navigate, location])

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
