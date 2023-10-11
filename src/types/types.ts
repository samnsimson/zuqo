// Generated by https://quicktype.io

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
