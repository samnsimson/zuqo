import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, PointerEvent, ReactNode, useState } from 'react'
import { HexagonIcon, MoreVerticalIcon, TrashIcon } from 'lucide-react'
import { useAppStore } from '@/store'
import { ConfirmationPropUpComponent } from '../confirmationPopUp'

interface NodeProps extends HTMLAttributes<HTMLDivElement> {
    selected: boolean
    id: string
    label: string
    icon?: ReactNode
}

interface NodeContainerProps extends HTMLAttributes<HTMLDivElement> {}
interface NodeTitleProps extends HTMLAttributes<HTMLParagraphElement> {
    label: string
    icon?: ReactNode
}

export const NodeContainer: FC<NodeContainerProps> = ({ children, ...props }) => {
    return (
        <div className="relative flex flex-row items-center" {...props}>
            {children}
        </div>
    )
}

const NodeTitle: FC<NodeTitleProps> = ({ icon, label, ...props }) => {
    return (
        <div className="px-3">
            <p
                {...props}
                className={cn(
                    'rounded-lg bg-gradient-to-b px-2.5 py-3 text-xs font-semibold uppercase text-white',
                    'flex items-center justify-start space-x-2',
                    {
                        'from-[#929292] to-[#595959]': label === 'exit',
                        'from-[#C6F444] to-[#82A61C]': label === 'menu',
                        'from-[#00539F] to-[#BB1865]': label === 'start',
                    }
                )}
            >
                {icon && <span>{icon}</span>} <span>{label}</span>
            </p>
        </div>
    )
}

export const Node: FC<NodeProps> = ({ id, selected, label, className, children, icon, ...props }) => {
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
                'min-w-[130px] rounded-lg border-[1px] border-gray-400 bg-white py-3 shadow-sm',
                'relative flex flex-col space-y-2 font-semibold',
                { 'border-sky-500 bg-sky-50 text-sky-500': selected },
                className
            )}
            data-node="custom-node"
            data-node-id={id}
            {...props}
        >
            <NodeTitle label={label} onClick={() => console.log('clicked')} icon={icon} />
            <div className="px-3">{children}</div>
            {!excludeNodeActionFor.includes(label) && (
                <div className="flex items-center justify-end space-x-3 px-3">
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
