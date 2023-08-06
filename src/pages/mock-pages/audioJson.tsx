import { sprites } from '@/mock-data/sprites'
import { FC } from 'react'

interface AudioJsonProps {
    [x: string]: any
}

export const AudioJson: FC<AudioJsonProps> = () => {
    return <pre>{JSON.stringify(sprites, null, '\t')}</pre>
}
