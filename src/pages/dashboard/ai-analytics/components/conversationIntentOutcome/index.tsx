import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { conversationIntentOutcomeData } from '@/mock-data/chart-data'
import { FC, HTMLAttributes } from 'react'

interface ConversationIntentOutcomeProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const ConversationIntentOutcome: FC<ConversationIntentOutcomeProps> = ({ ...props }) => {
    return (
        <div {...props}>
            <Table>
                <TableBody>
                    {conversationIntentOutcomeData.map((data, idx) => (
                        <TableRow key={idx} className="border-none">
                            <TableCell className="py-[13px]font-inter text-sm text-[#5D6881]" align="right">
                                {data.name}
                            </TableCell>
                            <TableCell className="w-[60%] py-[13px]">
                                <Progress value={data.value} color={data.color} className="w-full bg-gray-300" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
