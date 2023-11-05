import { FC, HTMLAttributes } from 'react'
import { ClassicPreset } from 'rete'
import { Presets } from 'rete-react-plugin'

interface OutputProps extends HTMLAttributes<HTMLDivElement> {
    key: string
    output: ClassicPreset.Output<ClassicPreset.Socket>
    nodeId: string
    props: any
}

export const Outputs: FC<OutputProps> = ({ key, output, nodeId, props }) => {
    const { RefSocket } = Presets.classic
    return (
        <div className="absolute -right-[10px] z-10" data-id={`output-${key}`}>
            <div className="bg-blue-600">{output.label}</div>
            <RefSocket name="output-socket" side="output" emit={props.emit} socketKey={key} nodeId={nodeId} payload={output.socket} />
        </div>
    )
}
