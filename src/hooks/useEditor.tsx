import { useToast } from '@/ui/use-toast'
import { ERROR_TOAST_TITLE, STUDIO_NOT_READY } from '@/constants/constants'
import { Editor } from '@/lib/flow-utils'
import { EditorReturnType, NodeOptions } from '@/types/types'
import { useEffect, useState } from 'react'
import { ClassicPreset } from 'rete'
import { useRete } from 'rete-react-plugin'

export const useEditor = (): EditorReturnType => {
    const [isEditorReady, setIsEditorReady] = useState(false)
    const [ref, editor] = useRete(Editor.init)
    const { toast } = useToast()

    const addNotes = async (label: string) => {
        try {
            if (!editor) return
            const node = await editor.addNode(label)
            await editor.setNodePosition(node, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1)
            editor.display()
            return node
        } catch (error: any) {
            toast({ variant: 'destructive', title: ERROR_TOAST_TITLE, description: error.message })
        }
    }

    const addNode = async (label: string, options: Partial<NodeOptions> = {}) => {
        try {
            if (!editor) return
            const node = await editor.addNode(label)
            if (options['input']) editor.addNodeInput(node.id)
            if (options['output']) editor.addNodeOutput(node.id)
            await editor.setNodePosition(node, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1)
            editor.display()
            return node
        } catch (error: any) {
            toast({ variant: 'destructive', title: ERROR_TOAST_TITLE, description: error.message })
        }
    }

    const addNodeInput = (nodeId: string, key: string) => {
        if (!editor) return
        editor.addNodeInput(nodeId, key)
    }

    const addNodeOutput = (nodeId: string, key: string) => {
        if (!editor) return
        editor.addNodeOutput(nodeId, key)
    }

    const addConnection = async (sourceNode: ClassicPreset.Node, targetNode: ClassicPreset.Node) => {
        try {
            if (!editor) return
            editor.addConnection(sourceNode, targetNode)
        } catch (error: any) {
            toast({ variant: 'destructive', title: ERROR_TOAST_TITLE, description: error.message })
        }
    }

    const deleteNode = async (id: string) => {
        try {
            if (!editor) return
            const result = await editor.deleteNode(id)
            if (result) return id
            throw new Error('Unable to delete the node')
        } catch (error: any) {
            toast({ variant: 'destructive', title: ERROR_TOAST_TITLE, description: error.message })
        }
    }

    const flowInfo = () => {
        if (!editor) toast({ variant: 'destructive', title: ERROR_TOAST_TITLE, description: STUDIO_NOT_READY })
        else return editor.flowInfo()
    }

    useEffect(() => {
        setIsEditorReady(editor !== null)
    }, [editor])

    return { ref, isEditorReady, editor: { addNode, addConnection, addNotes, flowInfo, deleteNode, addNodeInput, addNodeOutput } }
}
