import { PlusIcon } from 'lucide-react'
import { ClassicPreset } from 'rete'

export const CustomSocket = <T extends ClassicPreset.Socket>(props: { data: T }) => {
    return (
        <div className="z-10 rounded-full border-[2px] border-white bg-[#00539F] text-white shadow" title={props.data.name}>
            <PlusIcon size={16} />
        </div>
    )
}
