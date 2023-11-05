import { Progress } from '@/ui/progress'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface InteractionInfoProps extends HTMLAttributes<HTMLDivElement> {
    data: Array<{ name: string; icon: string | ReactNode; value: number }>
}

export const InteractionInfo: FC<InteractionInfoProps> = ({ data, ...props }) => {
    return (
        <div {...props} className="-my-4 space-y-[7px]">
            <table cellPadding={3.5} cellSpacing={12} className="w-full table-fixed border-collapse whitespace-nowrap">
                <tbody>
                    {data.map((item, key) => (
                        <tr key={key} className="flex items-center">
                            <td className="w-full text-right text-sm font-normal text-black">{item.name}</td>
                            <td>{item.icon}</td>
                            <td className="w-[99%] whitespace-nowrap">
                                <div className="flex flex-grow items-center space-x-[5px] font-jakarta text-sm">
                                    <Progress
                                        className="h-2.5 rounded-l-none bg-gradient-to-r from-[#015EB0] to-[#0147B0]"
                                        style={{ width: (item.value / Math.max(...data.map((d) => d.value))) * 100 }}
                                    />
                                    <span>{item.value}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
