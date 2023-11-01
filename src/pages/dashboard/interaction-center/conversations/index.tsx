import { BreadCrumbs } from '@/components/breadCrumbs'
import { ITabContent, TabSection } from '@/components/tabSection'
import { FC, HTMLAttributes } from 'react'
import { useLocation } from 'react-router-dom'
import { OverviewTabContent } from '../tabs/overview'

interface CoversationPageProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const tabContent = (channel: string | null): ITabContent[] => [
    {
        id: 'Overview',
        title: 'Overview',
        content: <OverviewTabContent channel={channel} />,
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

export const CoversationPage: FC<CoversationPageProps> = ({ ...props }) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    return (
        <div {...props}>
            <div className="px-12">
                <BreadCrumbs />
                <TabSection content={tabContent(params.get('channel'))} />
            </div>
        </div>
    )
}
