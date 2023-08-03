import { FC, ReactNode, useEffect, useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ActionCardGroupProps {
    [x: string]: any
}

interface IActionCard {
    name: string | ReactNode
    icon: string | ReactNode
    description: string | ReactNode
}

interface IconProps {
    color: string
    image: string
}

export const Icon: FC<IconProps> = ({ color, image }) => {
    return (
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}>
            <img src={image} alt="icon" />
        </div>
    )
}

export const ActionCardGroup: FC<ActionCardGroupProps> = () => {
    const [actionCards, setActionCards] = useState<IActionCard[]>([])

    useEffect(() => {
        setActionCards([
            {
                name: 'Build a Bot',
                icon: <Icon color="bg-color-swatch-blue" image="bot-icon.svg" />,
                description: 'My goal is to create and deploy a beautiful bot without any coding skills.',
            },
            {
                name: 'Create a Campaign',
                icon: <Icon color="bg-color-swatch-green" image="nft-icon.svg" />,
                description: 'I want to launch conversational campaigns that engage my audience.',
            },
            {
                name: 'Build Survey',
                icon: <Icon color="bg-color-swatch-violet" image="server-icon.svg" />,
                description: 'I want to build a survey and share it with customers to get feedback.',
            },
            {
                name: 'Dashboards',
                icon: <Icon color="bg-color-swatch-brown" image="dashboard-icon.svg" />,
                description: 'I want to see the dashboards to get insights to take decisions.',
            },
            {
                name: 'Setup Platform',
                icon: <Icon color="bg-color-swatch-teal" image="settings-icon.svg" />,
                description: 'I want to configure the platform based on the my need.',
            },
        ])
    }, [])

    return (
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-5 ">
            {actionCards.map((action, key) => (
                <Card key={key} className="overflow-hidden shadow-xl">
                    <img src="action-card-border.svg" alt="card-border" className="w-full" />
                    <CardHeader className="grid w-full gap-4 p-4">
                        {action.icon}
                        <CardTitle className="text-[16px] font-bold">{action.name}</CardTitle>
                        <CardDescription>{action.description}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )
}
