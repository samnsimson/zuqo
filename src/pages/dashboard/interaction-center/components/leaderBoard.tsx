import { ArrowGreen } from '@/assets/svg/icons'
import { Avatar } from '@/components/ui/avatar'
import { splitLeaderboard } from '@/lib/utils'
import { leaderBoardData } from '@/mock-data/leaderboard-data'
import { AvatarImage } from '@radix-ui/react-avatar'
import { FC, HTMLAttributes, useEffect, useState } from 'react'

interface LeaderBoardProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

type LeaderBoard = { name: string; points: number; avatar: string; status: string }

export const LeaderBoard: FC<LeaderBoardProps> = ({ ...props }) => {
    const [leaderBoard, setLeaderBoard] = useState<LeaderBoard[]>([])
    const [topThree, setTopThree] = useState<LeaderBoard[]>([])

    useEffect(() => {
        const { topThree, rest } = splitLeaderboard(leaderBoardData)
        setTopThree(topThree)
        setLeaderBoard(rest)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div {...props}>
            <ul className="grid grid-cols-3 px-5">
                <li className="relative col-span-1 flex h-[146px] w-full flex-col items-center justify-start place-self-end rounded-tl-[10px] rounded-tr-[10px] bg-[#578BB9] pt-6 after:absolute after:bottom-0 after:z-10 after:text-[40px] after:font-bold after:text-white after:content-['2']">
                    <Avatar className="left-[calc(50% - 20px)] absolute -top-5">
                        <AvatarImage src={topThree[1]?.avatar} />
                    </Avatar>
                    <p className="font-jakarta text-sm font-extrabold capitalize tracking-tight text-white">{topThree[1]?.name}</p>
                    <p className="font-jakarta text-sm font-extrabold capitalize tracking-tight text-white">{topThree[1]?.points}</p>
                </li>
                <li className="relative col-span-1 flex h-[180px] w-full flex-col items-center justify-start place-self-end rounded-tl-[10px] rounded-tr-[10px] bg-sky-700 pt-6 after:absolute after:bottom-0 after:z-10 after:text-[48px] after:font-bold after:text-white after:content-['1']">
                    <Avatar className="left-[calc(50% - 20px)] absolute -top-5">
                        <AvatarImage src={topThree[0]?.avatar} />
                    </Avatar>
                    <p className="font-jakarta text-sm font-extrabold capitalize tracking-tight text-white">{topThree[0]?.name}</p>
                    <p className="font-jakarta text-sm font-extrabold capitalize tracking-tight text-white">{topThree[0]?.points}</p>
                </li>
                <li className="relative col-span-1 flex h-[112px] w-full flex-col items-center justify-start place-self-end rounded-tl-[10px] rounded-tr-[10px] bg-[#C61764] pt-6 after:absolute after:bottom-0 after:z-10 after:text-[32px] after:font-bold after:text-white after:content-['3']">
                    <Avatar className="left-[calc(50% - 20px)] absolute -top-5">
                        <AvatarImage src={topThree[2]?.avatar} />
                    </Avatar>
                    <p className="font-jakarta text-sm font-extrabold capitalize tracking-tight text-white">{topThree[2]?.name}</p>
                    <p className="font-jakarta text-sm font-extrabold capitalize tracking-tight text-white">{topThree[2]?.points}</p>
                </li>
            </ul>
            <ul className="space-y-2">
                {leaderBoard.map((leader, key) => (
                    <li key={key} className="flex items-center gap-6 rounded-[10px] bg-orange-50 px-[14px] py-3">
                        <div className="flex-col items-center justify-center">
                            <div className="text-center font-jakarta text-base font-normal text-black">{key + 4}</div>
                            <ArrowGreen />
                        </div>
                        <Avatar>
                            <AvatarImage src={leader.avatar} />
                        </Avatar>
                        <div className="flex-1 font-['Inter'] text-base font-medium text-black">{leader.name}</div>
                        <div className="font-jakarta text-base font-normal text-black">{leader.points}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
