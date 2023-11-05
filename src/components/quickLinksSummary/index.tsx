import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Card } from '../../ui/card'
import { SummaryCardHeader } from '../summaryCardHeader'
import { Link } from 'react-router-dom'
import { assets } from '@/config/assets'

interface QuickLinksSummaryProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

interface IQuickLink {
    title: string | ReactNode
    path: string
    icon: string
    iconRight?: string
    iconBg: string
    titleBg: string
    color: string
}

const QuickLinks: FC<IQuickLink> = ({ title, path, icon, iconBg, titleBg, color, iconRight }) => {
    return (
        <Link to={path}>
            <div className="flex items-center justify-between overflow-hidden rounded-lg">
                <div className={cn('flex h-12 w-9 items-center justify-center py-[15px]', iconBg)}>
                    <img src={icon} alt="icon" />
                </div>
                <div className={cn('h-12 flex-grow px-[8px] py-[15px] pr-0', titleBg)}>
                    <p className={cn('text-sm font-bold', color)}>{title}</p>
                </div>
                {iconRight && (
                    <div className={cn('h-12 w-[18px] py-[15px] pr-[2px]', titleBg)}>
                        <img src={iconRight} alt="chevron" />
                    </div>
                )}
            </div>
        </Link>
    )
}

export const QuickLinksSummary: FC<QuickLinksSummaryProps> = ({ className, ...props }) => {
    const [quickLinks, setQuickLinks] = useState<IQuickLink[]>([])

    useEffect(() => {
        setQuickLinks([
            {
                title: 'Inbox',
                path: '',
                icon: assets.quickLinkInbox,
                iconBg: 'bg-color-swatch-green-dark',
                titleBg: 'bg-color-swatch-green-light',
                color: 'text-color-swatch-green-foreground',
                iconRight: assets.chevronRightGreen,
            },
            {
                title: 'Manage Users',
                path: '',
                icon: assets.quickLinkManageUser,
                iconBg: 'bg-color-swatch-blue-dark',
                titleBg: 'bg-color-swatch-blue-light',
                color: 'text-color-swatch-blue-foreground',
                iconRight: assets.chevronRightBlue,
            },
            {
                title: 'Workflow Studio',
                path: '',
                icon: assets.quickLinkWorkflow,
                iconBg: 'bg-color-swatch-brown-dark',
                titleBg: 'bg-color-swatch-brown-light',
                color: 'text-color-swatch-brown-foreground',
                iconRight: assets.chevronRightBrown,
            },
            {
                title: 'View All',
                path: '',
                icon: assets.quickLinkGrid,
                iconBg: 'bg-stone-200',
                titleBg: 'bg-stone-100',
                color: 'text-stone-700',
            },
        ])
    }, [])

    return (
        <Card className={cn('', className)} {...props}>
            <SummaryCardHeader title="Quick Links" showMaximizeIcon={false} />
            <div className="flex flex-col space-y-2 p-2">
                {quickLinks.map((link, key) => (
                    <QuickLinks {...link} key={key} />
                ))}
            </div>
        </Card>
    )
}
