// Generated by https://quicktype.io

import { MutableRefObject } from 'react'
import { ClassicPreset } from 'rete'
import { ClassicScheme, RenderEmit } from 'rete-react-plugin'

export interface ConversationData {
    _id: string
    created_at: string
    filename: string
    result: Result
    source: string
    status: string
    updated_at: string
}

export interface Result {
    conversation: Conversation[]
    entities: Array<string[]>
    overall_sentiment: OverallSentiment
    transcript: string
}

export interface Conversation {
    avatar: string
    from: string
    id: string
    message: Message[]
    time: string
}

export interface Message {
    emotion: OverallSentiment
    end: number
    id: string
    start: number
    text: string
}

export interface OverallSentiment {
    label: string
    score: number
}

export interface ISprite {
    id: string
    start: number
    end: number
}

export interface IConversation {
    id: string
    sender: string
    timestamp: string
    avatar: string
    message: IMessage[]
}

export interface IMessage {
    id: string
    text: string
    start: number
    end: number
}

export interface IFetchInteraction {
    page: number
}

export type NodeOptions = {
    input: boolean
    output: boolean
}

export type NodeTypes = 'start' | 'menu' | 'exit' | 'custom' | 'notes'

type NodeCLassicPreset = {
    [x: string]: ClassicPreset.Socket | undefined
}

type NodeCLassicControl = {
    [x: string]: ClassicPreset.Control | undefined
}

type NodeReturnType = Promise<ClassicPreset.Node<NodeCLassicPreset, NodeCLassicPreset, NodeCLassicControl> | undefined>

export type EditorReturnType = {
    ref: MutableRefObject<null>
    isEditorReady: boolean
    editor: {
        addNode: (label: NodeTypes, options?: Partial<NodeOptions>) => NodeReturnType
        addConnection: (sourceNode: ClassicPreset.Node, targetNode: ClassicPreset.Node) => Promise<void>
        addNotes: (label: NodeTypes) => NodeReturnType
    }
}

export type NodeExtraData = { [x: string]: any }

export type CustomNodeProps<S extends ClassicScheme> = {
    data: S['Node'] & NodeExtraData
    styles?: () => any
    emit: RenderEmit<S>
}
