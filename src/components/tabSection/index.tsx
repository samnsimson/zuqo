import { FC, ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import { cn } from '@/lib/utils'

interface TabSectionProps {
    content: ITabContent[]
}

export interface ITabContent {
    id: string
    title: string
    icon?: string
    description?: string
    content: string | ReactNode
}

export const TabSection: FC<TabSectionProps> = ({ content = [] }) => {
    return (
        <Tabs defaultValue={content[0].id}>
            <TabsList className="flex items-center justify-start gap-4 rounded-none border-b-2 border-gray-200 bg-transparent">
                {content.map((tab, key) => (
                    <TabsTrigger
                        value={tab.id}
                        key={key}
                        className={cn(
                            'mb-[2px] rounded-none px-1 pb-4 font-[500] text-gray-500',
                            'data-[state=active]:bg-transparent data-[state=active]:text-color-primary-foreground data-[state=active]:shadow-none',
                            'from-[#E1F5FF] to-white/5 data-[state=active]:border-b-2 data-[state=active]:border-color-primary data-[state=active]:bg-gradient-to-t'
                        )}
                    >
                        {tab.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {content.map((tab, key) => (
                <TabsContent value={tab.id} key={key} className="my-0 py-[30px]">
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    )
}
