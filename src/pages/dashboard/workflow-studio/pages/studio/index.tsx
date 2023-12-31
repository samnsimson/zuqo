/* eslint-disable react-hooks/exhaustive-deps */
import { FC, HTMLAttributes, useEffect } from 'react'
import { StudioHeader } from '../../components/studioHeader'
import { EditorToolBox } from '@/components/editorToolBox'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/ui/card'
import { Button } from '@/ui/button'
import { Plus } from 'lucide-react'
import { useEditor } from '@/hooks/useEditor'
import { useAppStore } from '@/store'
import { workflowId } from '@/lib/utils'

interface StudioProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const Studio: FC<StudioProps> = ({ ...props }) => {
    const { search } = useLocation()
    const navigate = useNavigate()
    const { setEditor } = useAppStore((state) => state)
    const params = new URLSearchParams(search)
    const intent = params.get('intent')
    const flowId = params.get('id')
    const { ref, isEditorReady, editor } = useEditor()

    useEffect(() => {
        setEditor(editor)
        editor.addNode('start', { input: true, output: true }).then((node) => {
            if (!node) return
        })
        editor.addNode('notes').then((node) => console.log(node))
    }, [isEditorReady])

    if (!intent || !['create', 'edit', 'view'].includes(intent) || !flowId) {
        return (
            <div className="flex flex-grow flex-col items-center justify-center">
                <Card>
                    <CardContent className="flex flex-col space-y-5 p-8">
                        <p>Cannot view Workflow Studio</p>
                        <Button
                            variant="primary"
                            className="space-x-3 text-white"
                            onClick={() => navigate(`/workflow-studio/studio?intent=create&id=${workflowId()}`)}
                        >
                            <Plus /> <span>Create New Workflow</span>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div {...props} className="flex flex-grow flex-col">
            <StudioHeader editor={editor} />
            <div className="relative h-full">
                <div {...props} className="relative h-full w-full bg-slate-100" ref={ref} />
                <EditorToolBox editor={editor} />
            </div>
        </div>
    )
}
