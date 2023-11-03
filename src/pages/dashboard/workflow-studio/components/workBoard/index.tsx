/* eslint-disable react-hooks/exhaustive-deps */
import { EditorToolBox } from '@/components/editorToolBox'
import { useEditor } from '@/hooks/useEditor'
import { FC, HTMLAttributes, useEffect } from 'react'

interface WorkBoardProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const WorkBoard: FC<WorkBoardProps> = ({ ...props }) => {
    const { ref, isEditorReady, editor } = useEditor()

    useEffect(() => {
        editor.addNode('start', { output: true }).then((node) => console.log(node))
        editor.addNode('notes').then((node) => console.log(node))
    }, [isEditorReady])

    return (
        <div {...props} className="relative h-full w-full bg-slate-100" ref={ref}>
            <EditorToolBox editor={editor} />
        </div>
    )
}
