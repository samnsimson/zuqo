import { ClassicPreset } from 'rete'

export const CustomSocket = <T extends ClassicPreset.Socket>(props: { data: T }) => {
    return <div className="z-10 h-2.5 w-2.5 rounded-full border-[2px] border-white bg-[#00539F] shadow" title={props.data.name} />
}
