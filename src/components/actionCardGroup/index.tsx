import { FC } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { assets } from '@/config/assets'
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { useAppStore } from '@/store'
import { useNavigate } from 'react-router-dom'

interface ActionCardGroupProps {
    [x: string]: any
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

const ModelContentIndexZero: FC = () => {
    const { activeModelIndex, setActiveModelIndex } = useAppStore((state) => state)
    return (
        <div>
            <img src={assets.modelImageOne} alt="model image one" />
            <div className="space-y-7 p-8">
                <div className="font-jakarta text-base font-normal leading-snug text-black">
                    Let's create your first workflow - on Zuqo, we call it as{' '}
                    <span className="font-jakarta text-base font-bold leading-snug text-black">Journey</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Button variant="primary" className="text-white" onClick={() => setActiveModelIndex(activeModelIndex + 1)}>
                        Let's Go
                    </Button>
                    <Button variant="ghost">Learn more</Button>
                </div>
            </div>
        </div>
    )
}

const ModelContentIndexOne: FC = () => {
    const { activeModelIndex, setActiveModelIndex } = useAppStore((state) => state)
    return (
        <div className="space-y-7 p-8">
            <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">Start from scratch or template</div>
            <div className="w-[626px] text-center font-jakarta text-base font-normal leading-snug text-black">
                👉 Studio let you automate your work: build them. It’ll change the way you work!
                <br />
                We’ve found that it’s best to start small, turning a single task into your first Journey.
            </div>
            <div className="flex items-center justify-center space-x-4">
                <Button variant="ghost" onClick={() => setActiveModelIndex(activeModelIndex - 1)}>
                    Back
                </Button>
                <Button variant="primary" className="text-white" onClick={() => setActiveModelIndex(activeModelIndex + 1)}>
                    Continue
                </Button>
            </div>
        </div>
    )
}

const ModelContentIndexTwo: FC = () => {
    const { activeModelIndex, setActiveModelIndex } = useAppStore((state) => state)
    return (
        <div>
            <img src={assets.modelImageTwo} alt="model image one" />
            <div className="space-y-7 p-8">
                <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">Use Modules</div>
                <div className="w-[626px] text-center font-jakarta text-base font-normal leading-snug text-black">
                    👉 Modules are pre defined set of workflows for you to save time. This text needs to be updated. Need Sam’s help in defining a story
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost" onClick={() => setActiveModelIndex(activeModelIndex - 1)}>
                        Back
                    </Button>
                    <Button variant="primary" className="text-white" onClick={() => setActiveModelIndex(activeModelIndex + 1)}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    )
}

const ModelContentIndexThree: FC = () => {
    const { activeModelIndex, setActiveModelIndex } = useAppStore((state) => state)
    return (
        <div>
            <img src={assets.modelImageThree} alt="model image one" />
            <div className="space-y-7 p-8">
                <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">Test Your Journey</div>
                <div className="w-[626px] text-center font-jakarta text-base font-normal leading-snug text-black">
                    👉 Journey lorem are pre defined set of workflows for you to save time. This text needs to be updated. Need Sam’s help in defining a story
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost" onClick={() => setActiveModelIndex(activeModelIndex - 1)}>
                        Back
                    </Button>
                    <Button variant="primary" className="text-white" onClick={() => setActiveModelIndex(activeModelIndex + 1)}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    )
}

const ModelContentIndexFour: FC = () => {
    const { activeModelIndex, setActiveModelIndex } = useAppStore((state) => state)
    const navigate = useNavigate()
    return (
        <div>
            <img src={assets.modelImageFour} alt="model image one" />
            <div className="space-y-7 p-8">
                <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">Share & Collaborate</div>
                <div className="w-[626px] text-center font-jakarta text-base font-normal leading-snug text-black">
                    👉 Journey lorem are pre defined set of workflows for you to save time. This text needs to be updated. Need Sam’s help in defining a story
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost" onClick={() => setActiveModelIndex(activeModelIndex - 1)}>
                        Back
                    </Button>
                    <Button variant="primary" className="text-white" onClick={() => navigate('workflow-studio/studio?intent=create')}>
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}

export const ActionCardGroup: FC<ActionCardGroupProps> = () => {
    const content = [<ModelContentIndexZero />, <ModelContentIndexOne />, <ModelContentIndexTwo />, <ModelContentIndexThree />, <ModelContentIndexFour />]
    const { activeModelIndex, setActiveModelIndex } = useAppStore((state) => state)

    const handleToggle = (open: boolean) => {
        open ? setActiveModelIndex(0) : setTimeout(() => setActiveModelIndex(0), 1000)
    }

    return (
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-5 ">
            <Dialog onOpenChange={(open) => handleToggle(open)}>
                <DialogTrigger className="my-0 h-full py-0 text-left">
                    <Card className="h-full overflow-hidden shadow-xl">
                        <img src={assets.actionCardBorder} alt="card-border" className="w-full" />
                        <CardHeader className="grid w-full gap-4 p-4">
                            <Icon color="bg-color-swatch-blue" image={assets.botIcon} />
                            <CardTitle className="text-left text-[16px] font-bold">Build a Bot</CardTitle>
                            <CardDescription>My goal is to create and deploy a beautiful bot without any coding skills.</CardDescription>
                        </CardHeader>
                    </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[757px] p-0">
                    <DialogDescription>{content[activeModelIndex]}</DialogDescription>
                </DialogContent>
            </Dialog>
            <Card className="overflow-hidden shadow-xl">
                <img src={assets.actionCardBorder} alt="card-border" className="w-full" />
                <CardHeader className="grid w-full gap-4 p-4">
                    <Icon color="bg-color-swatch-green" image={assets.nftIcon} />
                    <CardTitle className="text-[16px] font-bold">Create a Campaign</CardTitle>
                    <CardDescription>I want to launch conversational campaigns that engage my audience.</CardDescription>
                </CardHeader>
            </Card>
            <Card className="overflow-hidden shadow-xl">
                <img src={assets.actionCardBorder} alt="card-border" className="w-full" />
                <CardHeader className="grid w-full gap-4 p-4">
                    <Icon color="bg-color-swatch-violet" image={assets.serverIcon} />
                    <CardTitle className="text-[16px] font-bold">Build Survey</CardTitle>
                    <CardDescription>I want to build a survey and share it with customers to get feedback.</CardDescription>
                </CardHeader>
            </Card>
            <Card className="overflow-hidden shadow-xl">
                <img src={assets.actionCardBorder} alt="card-border" className="w-full" />
                <CardHeader className="grid w-full gap-4 p-4">
                    <Icon color="bg-color-swatch-brown" image={assets.dashboardIcon} />
                    <CardTitle className="text-[16px] font-bold">Dashboards</CardTitle>
                    <CardDescription>I want to see the dashboards to get insights to take decisions.</CardDescription>
                </CardHeader>
            </Card>
            <Card className="overflow-hidden shadow-xl">
                <img src={assets.actionCardBorder} alt="card-border" className="w-full" />
                <CardHeader className="grid w-full gap-4 p-4">
                    <Icon color="bg-color-swatch-teal" image={assets.settingsIcon} />
                    <CardTitle className="text-[16px] font-bold">Setup Platform</CardTitle>
                    <CardDescription>I want to configure the platform based on the my need.</CardDescription>
                </CardHeader>
            </Card>
        </div>
    )
}
