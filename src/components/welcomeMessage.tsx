import { FC } from 'react'

interface WelcomeMessageProps {
    [x: string]: any
}

export const WelcomeMessage: FC<WelcomeMessageProps> = () => {
    return (
        <div>
            <p className="mb-4 text-color-secondary-foreground">
                <b>Good morning</b>, John
            </p>
            <p className="text-lg">What brings you to Zuqo ACPaaS Platform?</p>
            <p className="text-xs text-gray-500">Select the options that best describe you. Don't worry, you can explore other options later</p>
        </div>
    )
}
