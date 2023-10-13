import { FC, HTMLAttributes } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'
import { NewWorkflowDialog } from '../newWorkflowDialog'

interface NewWorkflowButtonProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const NewWorkflowButton: FC<NewWorkflowButtonProps> = ({ ...props }) => {
    return (
        <Dialog {...props}>
            <DialogTrigger>
                <Button variant="primary" className="space-x-2 text-white">
                    <PlusIcon className="text-xs" /> <span>New Workflow</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[757px] p-0">
                <DialogDescription>
                    <NewWorkflowDialog />
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}
