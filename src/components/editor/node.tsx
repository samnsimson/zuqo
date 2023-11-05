import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, PointerEvent, useState } from 'react'
import { HexagonIcon, MoreVerticalIcon, TrashIcon } from 'lucide-react'
import { useAppStore } from '@/store'
import { ConfirmationPropUpComponent } from '../confirmationPopUp'

interface NodeProps extends HTMLAttributes<HTMLDivElement> {
    selected: boolean
    id: string
    label: string
}

interface NodeContainerProps extends HTMLAttributes<HTMLDivElement> {}
interface NodeTitleProps extends HTMLAttributes<HTMLParagraphElement> {
    label: string
}

export const NodeContainer: FC<NodeContainerProps> = ({ children, ...props }) => {
    return (
        <div className="relative flex flex-row items-center" {...props}>
            {children}
        </div>
    )
}

const NodeTitle: FC<NodeTitleProps> = ({ label, ...props }) => {
    return (
        <p
            {...props}
            className={cn('rounded-lg bg-gradient-to-b p-4 text-xs font-semibold uppercase text-white', {
                'from-[#929292] to-[#595959]': label === 'exit',
                'from-[#C6F444] to-[#82A61C]': label === 'menu',
                'from-[#00539F] to-[#BB1865]': label === 'start',
            })}
        >
            {label}
        </p>
    )
}

export const Node: FC<NodeProps> = ({ id, selected, label, className, children, ...props }) => {
    const { editor } = useAppStore((state) => state)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const excludeNodeActionFor = ['start']

    const handleClickOnActionMenu = (e: PointerEvent<SVGElement>) => {
        e.stopPropagation()
        setShowDeleteConfirmation(!showDeleteConfirmation)
    }

    return (
        <div
            className={cn(
                'min-w-[130px] rounded-lg border-[1px] border-gray-400 bg-white p-3 shadow-sm',
                'flex flex-col space-y-2 font-semibold',
                { 'border-sky-500 bg-sky-50 text-sky-500': selected },
                className
            )}
            data-node="custom-node"
            data-node-id={id}
            {...props}
        >
            <NodeTitle label={label} onClick={() => console.log('clicked')} />
            {children}
            {!excludeNodeActionFor.includes(label) && (
                <div className="flex items-center justify-end space-x-3">
                    <HexagonIcon size={18} className="cursor-pointer opacity-60" color="#4E545F" />
                    <TrashIcon size={18} className="cursor-pointer fill-red-100 stroke-red-500 font-bold" onPointerDown={handleClickOnActionMenu} />
                    <MoreVerticalIcon size={18} className="cursor-pointer opacity-60" color="#4E545F" />
                </div>
            )}
            <ConfirmationPropUpComponent
                variant="destructive"
                title="Are you sure you want to delete this node?"
                description="Deleting the node will delete all the connections to and from this node."
                onCancel={() => setShowDeleteConfirmation(!showDeleteConfirmation)}
                onConfirm={() => editor && editor.deleteNode(id)}
                open={showDeleteConfirmation}
            />
        </div>
    )
}
