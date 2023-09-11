import { ITabContent, TabSection } from '@/components/tabSection'
import { FC } from 'react'
import { OverviewTabContent } from './tabs/overview'
import { BreadCrumbs } from '@/components/breadCrumbs'

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
        <div className="px-12">
            <BreadCrumbs />
            <TabSection content={tabContent} />
        </div>
    )
}
