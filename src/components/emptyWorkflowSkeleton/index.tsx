import { assets } from '@/config/assets'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'

interface EmptyWorkflowSkeletonProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const EmptyWorkflowSkeleton: FC<EmptyWorkflowSkeletonProps> = ({ className, ...props }) => {
    return (
        <div {...props} className={cn('w-full py-16', className)}>
            <div className="flex flex-col items-center justify-center space-y-[54px]">
                <img src={assets.createWorkflowImage} alt="create workflow" width={450} />
                <div className="space-y-[18px]">
                    <div className="text-center font-jakarta text-2xl font-bold leading-snug text-gray-600">You have not created workflows yet</div>
                    <div className="max-w-[626px] text-center font-jakarta text-base font-normal leading-snug text-black">
                        Start creating your first flow. You can create IVR, Message Bot, Inbound Voice, Outbound Voice, Survey & Campaigns
                    </div>
                </div>
                <Button variant="primary" className="space-x-3 text-white">
                    <PlusIcon className="text-white" /> <span>New Workflow</span>
                </Button>
            </div>
        </div>
    )
}
