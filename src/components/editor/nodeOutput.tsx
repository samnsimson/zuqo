import { FC, HTMLAttributes } from 'react'
import { ClassicPreset } from 'rete'
import { Presets } from 'rete-react-plugin'

interface OutputProps extends HTMLAttributes<HTMLDivElement> {
    outputs: Array<[string, ClassicPreset.Output<ClassicPreset.Socket> | undefined]>
    nodeId: string
    props: any
}

export const Outputs: FC<OutputProps> = ({ outputs, nodeId, props }) => {
    const { RefSocket } = Presets.classic
    return (
        <div className="relative flex flex-col space-y-2">
            {outputs.map(
                ([key, output], idx) =>
                    output && (
                        <div className="relative -right-[22px] z-10 flex flex-row-reverse items-center gap-1" data-id={`output-${key}`} key={`${key}-${idx}`}>
                            <RefSocket name="output-socket" side="output" emit={props.emit} socketKey={key} nodeId={nodeId} payload={output.socket} />
                            <p className="font-jakarta text-xs text-[#4E545F]">{output.label}</p>
                        </div>
                    )
            )}
        </div>
    )
}
