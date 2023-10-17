import { Editor } from '@/lib/flow-utils'
import { FC, HTMLAttributes } from 'react'
import { useRete } from 'rete-react-plugin'

interface WorkBoardProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const WorkBoard: FC<WorkBoardProps> = ({ ...props }) => {
    const [ref, editor] = useRete(Editor.init)

    if (editor) {
        editor.addNode('node-a', 'Sam').then((node) => editor.setNodePosition(node, 0, 0).then(() => editor.display()))
    }

    return <div {...props} className="relative h-full w-full bg-slate-100" ref={ref}></div>
}
