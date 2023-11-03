import { FC, HTMLAttributes } from 'react'
import { ClassicPreset } from 'rete'
import { Presets } from 'rete-react-plugin'

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    key: string
    input: ClassicPreset.Input<ClassicPreset.Socket>
    nodeId: string
    props: any
}

export const Inputs: FC<InputProps> = ({ key, input, nodeId, props }) => {
    const { RefControl, RefSocket } = Presets.classic
    return (
        <div className="absolute -left-[5px] z-10" data-id={`input-${key}`}>
            <RefSocket name="input-socket" side="input" emit={props.emit} socketKey={key} nodeId={nodeId} payload={input.socket} />
            {input && (!input.control || !input.showControl) && <div>{input.label}</div>}
            {input.control && input.showControl && <RefControl key={key} name="input-control" emit={props.emit} payload={input.control} />}
        </div>
    )
}
