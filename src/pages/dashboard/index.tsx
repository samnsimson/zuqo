import { Header } from '@/components/header'
import { Navbar, NavbarLinkProps } from '@/components/navbar'
import { useAppStore } from '@/store'
import { FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

interface DashboardProps {
    [x: string]: any
}

const navbarLinks: NavbarLinkProps[] = [
    {
        name: 'Overview',
        icon: 'grid-view-icon.svg',
        children: [
            {
                name: <span className="text-[#101828]">Overview</span>,
                description: 'Manage users, roles and permissions',
                icon: 'nav-overview-icon.svg',
            },
            {
                name: <span className="text-[#0CA68D]">Inbox</span>,
                description: 'Are you an agent? Get your messages',
                icon: 'nav-inbox-icon.svg',
            },
            {
                name: <span className="text-[#B77615]">Workflow Studio</span>,
                description: 'Build automation workflow with no code',
                icon: 'nav-workflow-icon.svg',
            },
            {
                name: <span className="text-[#B715A7]">Interaction Center</span>,
                description: 'Manage, track customer interactions',
                icon: 'nav-chat-icon.svg',
            },
            {
                name: <span className="text-[#40AC0E]">AI Analytics</span>,
                description: 'AI generated analytics. need to discuss',
                icon: 'nav-analytics-icon.svg',
            },
            {
                name: <span className="text-[#1815B7]">User Management</span>,
                description: 'Manage users, roles and permissions',
                icon: 'nav-overview-icon.svg',
            },
        ],
    },
]

export const Dashboard: FC<DashboardProps> = () => {
    const { authenticated } = useAppStore((state) => state)
    const navigate = useNavigate()

    if (!authenticated) navigate('/login')

    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header variant="primary" className="flex gap-[27px]">
                <img src="logo-icon.svg" alt="logo icon" />
                <Navbar links={navbarLinks} />
            </Header>
            <Outlet />
        </div>
    )
}
