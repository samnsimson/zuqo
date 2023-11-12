import { FC, HTMLAttributes } from 'react'
import { ClassicPreset } from 'rete'
import { Presets } from 'rete-react-plugin'

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    inputs: Array<[string, ClassicPreset.Input<ClassicPreset.Socket> | undefined]>
    nodeId: string
    props: any
}

export const Inputs: FC<InputProps> = ({ inputs, nodeId, props }) => {
    const { RefControl, RefSocket } = Presets.classic
    return (
        <div className="relative flex flex-col space-y-2">
            {inputs.map(
                ([key, input], idx) =>
                    input && (
                        <div className="relative -left-[22px] z-10 flex items-center space-x-1" data-id={`input-${input.label}`} key={`${key}-${idx}`}>
                            <RefSocket
                                name="input-socket"
                                side="input"
                                emit={props.emit}
                                socketKey={input.label ?? ''}
                                nodeId={nodeId}
                                payload={input.socket}
                            />
                            {input && (!input.control || !input.showControl) && <p className="font-jakarta text-xs text-[#4E545F]">{input.label}</p>}
                            {input.control && input.showControl && (
                                <RefControl key={input.label} name="input-control" emit={props.emit} payload={input.control} />
                            )}
                        </div>
                    )
            )}
        </div>
    )
}
