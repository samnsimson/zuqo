import { FC, HTMLAttributes } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

interface NewWorkflowDialogProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const data = [
    {
        icon: '',
        title: 'IVR',
        description: 'Design interactive voice menus and call routing for your phone system.',
        link: '',
    },
    {
        icon: '',
        title: 'Inbound Voice',
        description: 'Create workflows to manage incoming calls and ensure efficient call handling',
        link: '',
    },
    {
        icon: '',
        title: 'Messaging Bot',
        description: 'Create workflows to manage incoming calls and ensure efficient call handling',
        link: '',
    },
    {
        icon: '',
        title: 'Email',
        description: 'Craft email automation workflows to send personalized emails at scale.',
        link: '',
    },
    {
        icon: '',
        title: 'Survey Designer',
        description: 'Craft email automation workflows to send personalized emails at scale.',
        link: '',
    },
    {
        icon: '',
        title: 'Campaigns',
        description: 'Build powerful marketing campaigns to reach your audience effectively.',
        link: '',
    },
]

export const NewWorkflowDialog: FC<NewWorkflowDialogProps> = ({ ...props }) => {
    return (
        <div {...props} className="space-y-10 bg-[#f7f7f7] p-6">
            <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">What kind of workflow you want to build?</div>
            <div className="space-y-4">
                {data.map((el, key) => (
                    <Card key={key} className="border-l-4 border-transparent shadow-lg shadow-gray-500/10 hover:border-l-pink-700">
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
}
