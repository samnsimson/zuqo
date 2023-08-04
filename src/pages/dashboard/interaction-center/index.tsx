import { ITabContent, TabSection } from '@/components/tabSection'
import { SidebarLayout } from '@/layouts/sidebarLayout'
import { FC } from 'react'
import { OverviewTabContent } from './tabs/overview'

interface InteractionCenterPageProps {
    [x: string]: any
}

const tabContent: ITabContent[] = [
    {
        id: 'Overview',
        title: 'Overview',
        content: <OverviewTabContent />,
    },
    {
        id: 'Transcript',
        title: 'Transcript',
        content: '',
    },
    {
        id: 'Discover',
        title: 'Discover',
        content: '',
    },
    {
        id: 'Analyse',
        title: 'Analyse',
        content: '',
    },
    {
        id: 'Report',
        title: 'Report',
        content: '',
    },
    {
        id: 'Design',
        title: 'Design',
        content: '',
    },
    {
        id: 'Evaluation',
        title: 'Evaluation',
        content: '',
    },
]

export const InteractionCenterPage: FC<InteractionCenterPageProps> = () => {
    return (
        <SidebarLayout>
            <TabSection content={tabContent} />
        </SidebarLayout>
    )
}
