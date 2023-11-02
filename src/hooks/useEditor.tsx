import { Editor } from '@/lib/flow-utils'
import { useAppStore } from '@/store'
import { EditorReturnType, NodeOptions } from '@/types/types'
import { useEffect, useState } from 'react'
import { ClassicPreset } from 'rete'
import { useRete } from 'rete-react-plugin'

export const useEditor = (): EditorReturnType => {
    const [isEditorReady, setIsEditorReady] = useState(false)
    const [ref, editor] = useRete(Editor.init)
    const { setNodeInfo } = useAppStore((state) => state)

    const addNode = async (label: string, options: Partial<NodeOptions> = {}) => {
        if (!editor) return
        const node = await editor.addNode(label)
        if (options['input']) editor.addNodeInput('input', node)
        if (options['output']) editor.addNodeOutput('output', node)
        await editor.setNodePosition(node, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1)
        editor.display()
        setNodeInfo(node)
        return node
    }

    const addConnection = async (sourceNode: ClassicPreset.Node, targetNode: ClassicPreset.Node) => {
        if (!editor) return
        editor.addConnection(sourceNode, targetNode)
    }

    useEffect(() => {
        setIsEditorReady(editor !== null)
    }, [editor])

    return { ref, isEditorReady, editor: { addNode, addConnection } }
}
