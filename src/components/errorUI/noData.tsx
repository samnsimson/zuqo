import { FileWarning } from 'lucide-react'
import { FC, HTMLAttributes } from 'react'

interface NoDataProps extends HTMLAttributes<HTMLDivElement> {
    translation: string
}

export const NoData: FC<NoDataProps> = ({ translation = null }) => {
    return (
        <div className="flex min-h-[300px] w-full flex-1 flex-col items-center justify-center space-y-4 px-5">
            <div>
                <FileWarning size={48} color="red" />
            </div>
            <div className="font-semibold">{translation || `No Data to show`}</div>
        </div>
    )
}
