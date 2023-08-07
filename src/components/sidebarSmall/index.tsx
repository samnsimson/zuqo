import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface SidebarSmallProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

interface SidebarLinkProps {
    icon: string
    path: string
}

const SidebarLink: FC<SidebarLinkProps> = ({ icon, path }) => {
    return (
        <Link to={path} className="mx-2.5 flex items-center justify-center rounded py-2.5 transition-colors hover:bg-slate-100">
            <img src={icon} alt="sidebar icon" />
        </Link>
    )
}

export const SidebarSmall: FC<SidebarSmallProps> = ({ className, ...props }) => {
    const [links, setLinks] = useState<SidebarLinkProps[]>([])

    useEffect(() => {
        setLinks([
            {
                icon: assets.dashboardAlt,
                path: '',
            },
            {
                icon: assets.chatBubble,
                path: '',
            },
            {
                icon: assets.lineChartAlt,
                path: '',
            },
        ])
    }, [])

    return (
        <div className={cn('z-10 min-h-full w-[71px] bg-white shadow', className)} {...props}>
            <ul className="grid w-full gap-7 py-5">
                {links.map((link, key) => (
                    <SidebarLink key={key} {...link} />
                ))}
            </ul>
        </div>
    )
}
