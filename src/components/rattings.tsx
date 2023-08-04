import { FC } from 'react'

interface StartRattingsProps {
    rating: number
    label: string
}

export const StartRattings: FC<StartRattingsProps> = ({ rating = 0, label }) => {
    return (
        <div className="flex flex-col">
            <div className="flex w-full items-center justify-start">
                {[...Array(5)].map((_, idx) => (
                    <div className="h-12 w-8">
                        <img src={idx + 1 <= rating ? 'star-filled.svg' : 'star-unfilled.svg'} alt="rating" key={idx} className="object-cover" />
                    </div>
                ))}
            </div>
            <div>
                <p className="text-sm font-semibold uppercase text-[#6E6893]">{label}</p>
            </div>
        </div>
    )
}
