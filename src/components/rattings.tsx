import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface StartRattingsProps extends HTMLAttributes<HTMLDivElement> {
    rating: number
    label: string | null
    starStyle?: string
}

export const StartRattings: FC<StartRattingsProps> = ({ rating = 0, label = null, starStyle }) => {
    return (
        <div className="flex flex-col">
            <div className="flex w-full items-center justify-start">
                {[...Array(5)].map((_, idx) => (
                    <div className={cn('h-12 w-8', starStyle)}>
                        <img src={idx + 1 <= rating ? 'star-filled.svg' : 'star-unfilled.svg'} alt="rating" key={idx} className="object-cover" />
                    </div>
                ))}
            </div>
            {label && (
                <div>
                    <p className="text-sm font-semibold uppercase text-[#6E6893]">{label}</p>
                </div>
            )}
        </div>
    )
}
