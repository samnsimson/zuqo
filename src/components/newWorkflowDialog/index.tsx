import { FC, HTMLAttributes, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { AddCard } from '@/assets/svg/icons'
import { Link } from 'react-router-dom'

interface NewWorkflowDialogProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const data = [
    {
        id: 1,
        icon: '',
        title: 'IVR',
        description: 'Design interactive voice menus and call routing for your phone system.',
        link: '',
    },
    {
        id: 2,
        icon: '',
        title: 'Inbound Voice',
        description: 'Create workflows to manage incoming calls and ensure efficient call handling',
        link: '',
    },
    {
        id: 3,
        icon: '',
        title: 'Messaging Bot',
        description: 'Create workflows to manage incoming calls and ensure efficient call handling',
        link: '',
    },
    {
        id: 4,
        icon: '',
        title: 'Email',
        description: 'Craft email automation workflows to send personalized emails at scale.',
        link: '',
    },
    {
        id: 5,
        icon: '',
        title: 'Survey Designer',
        description: 'Craft email automation workflows to send personalized emails at scale.',
        link: '',
    },
    {
        id: 6,
        icon: '',
        title: 'Campaigns',
        description: 'Build powerful marketing campaigns to reach your audience effectively.',
        link: '',
    },
]

export const NewWorkflowDialog: FC<NewWorkflowDialogProps> = ({ ...props }) => {
    const [workflowKind, setWorkflowKind] = useState(0)
    switch (workflowKind) {
        case 0:
            return (
                <div {...props} className="space-y-10 bg-[#f7f7f7] p-6">
                    <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">What kind of workflow you want to build?</div>
                    <div className="space-y-4">
                        {data.map((el, key) => (
                            <Card
                                key={key}
                                className="cursor-pointer border-l-4 border-transparent shadow shadow-gray-500/10 hover:border-l-pink-700"
                                onClick={() => setWorkflowKind(el.id)}
                            >
                                <CardContent className="flex items-center p-[18px]">
                                    <div>{el.icon}</div>
                                    <div className="space-y-[9px]">
                                        <div className="font-jakarta text-base font-semibold leading-snug text-sky-700">{el.title}</div>
                                        <div className="w-[608px] font-jakarta text-sm font-normal leading-snug text-black">{el.description}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <Button variant="outline">Back</Button>
                </div>
            )
        case 1:
            return (
                <div {...props} className="space-y-10 bg-[#f7f7f7] p-6">
                    <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">How do you want to proceed for your IVR?</div>
                    <div className="grid grid-cols-3 gap-4">
                        <Link
                            to="#"
                            className="group col-span-1 flex flex-col items-center space-y-6 rounded-lg border-t-4 border-transparent bg-white px-3 py-6 shadow hover:border-t-pink-700"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00539F] group-hover:bg-pink-700">
                                <AddCard />
                            </div>
                            <div className="text-center font-jakarta text-base font-semibold leading-snug text-sky-700 group-hover:text-pink-700">
                                Start from scratch
                            </div>
                            <div className="text-center font-jakarta text-sm font-normal leading-snug text-black">
                                Start with a blank canvas and let your imagination flow
                            </div>
                        </Link>
                        <Link
                            to="#"
                            className="group col-span-1 flex flex-col items-center space-y-6 rounded-lg border-t-4 border-transparent bg-white px-3 py-6 shadow hover:border-t-pink-700"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00539F] group-hover:bg-pink-700">
                                <AddCard />
                            </div>
                            <div className="text-center font-jakarta text-base font-semibold leading-snug text-sky-700 group-hover:text-pink-700">
                                Built it for me
                            </div>
                            <div className="text-center font-jakarta text-sm font-normal leading-snug text-black">
                                Start with a blank canvas and let your imagination flow
                            </div>
                            <Button className="bg-pink-700 text-white hover:bg-pink-800">BETA</Button>
                        </Link>
                        <Link
                            to="#"
                            className="group col-span-1 flex flex-col items-center space-y-6 rounded-lg border-t-4 border-transparent bg-white px-3 py-6 shadow hover:border-t-pink-700"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00539F] group-hover:bg-pink-700">
                                <AddCard />
                            </div>
                            <div className="text-center font-jakarta text-base font-semibold leading-snug text-sky-700 group-hover:text-pink-700">
                                Use a template
                            </div>
                            <div className="text-center font-jakarta text-sm font-normal leading-snug text-black">
                                Start with a blank canvas and let your imagination flow
                            </div>
                        </Link>
                    </div>
                    <Button variant="outline" onClick={() => setWorkflowKind(0)}>
                        Back
                    </Button>
                </div>
            )
        default:
            break
    }
}
