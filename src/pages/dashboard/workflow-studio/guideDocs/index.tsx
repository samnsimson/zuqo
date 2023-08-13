import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, useEffect, useState } from 'react'

interface GuideDocsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

interface IGuides {
    title: string
    imageUrl: string
    tag: string
    description: string
    bgColor: string
}

export const GuideDocs: FC<GuideDocsProps> = ({ className, ...props }) => {
    const [guides, setGuides] = useState<IGuides[]>([])

    useEffect(() => {
        setGuides([
            {
                title: 'How to create a workflow?',
                tag: 'GUIDE',
                imageUrl: '/assets/curate.svg',
                description: 'Create your flows using no code visual builder with ease',
                bgColor: 'bg-[#F8EDCD]',
            },
            {
                title: 'Deploy your bots in production in minitues',
                tag: 'GUIDE',
                imageUrl: '/assets/chatbot.svg',
                description: 'Create your flows using no code visual builder with ease',
                bgColor: 'bg-[#C9DAF0]',
            },
            {
                title: 'Reach people at right moment',
                tag: 'BUSINESS TIP',
                imageUrl: '/assets/businesstip.svg',
                description: 'Use these business tips to improve the customer experience with our quick tips. This text needs to be changed',
                bgColor: 'bg-[#DBE9CF]',
            },
        ])
    }, [])

    return (
        <div className={cn('grid grid-cols-1 gap-4', className)} {...props}>
            <div className="text-lg font-medium text-gray-900">Need some help?</div>
            <div className="grid grid-cols-3 gap-6">
                {guides.map((guide, key) => (
                    <div className="col-span-1 flex flex-col space-y-[10px]" key={key}>
                        <div className={cn('flex h-[182px] w-full items-center justify-center rounded', guide.bgColor)}>
                            <img src={guide.imageUrl} alt={guide.title} />
                        </div>
                        <div className="flex flex-col space-y-[11px]">
                            <div>
                                <div className="inline-block h-[25px] rounded bg-gray-200 px-2.5 py-[5px]">
                                    <div className="text-xs font-bold tracking-wider text-[#00539F]">{guide.tag}</div>
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-[#00539F]">{guide.title}</div>
                            <div className="text-sm font-semibold leading-[22px] text-[#101828] opacity-70">{guide.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
