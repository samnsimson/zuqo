import { cn, sortByIndex } from '@/lib/utils'
// import { NodeTypes } from '@/types/types'
import { FC, HTMLAttributes } from 'react'
import { ClassicPreset } from 'rete'
import { ClassicScheme, RenderEmit, Presets } from 'rete-react-plugin'

type NodeExtraData = {
    width?: number
    height?: number
    // type: NodeTypes
}

type Props<S extends ClassicScheme> = {
    data: S['Node'] & NodeExtraData
    styles?: () => any
    emit: RenderEmit<S>
}

interface OutputProps extends HTMLAttributes<HTMLDivElement> {
    key: string
    output: ClassicPreset.Output<ClassicPreset.Socket>
    nodeId: string
    props: any
}

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    key: string
    input: ClassicPreset.Input<ClassicPreset.Socket>
    nodeId: string
    props: any
}

const Outputs: FC<OutputProps> = ({ key, output, nodeId, props }) => {
    const { RefSocket } = Presets.classic
    return (
        <div className="absolute -right-[5px] z-10" data-id={`output-${key}`}>
            <div className="bg-blue-600">{output.label}</div>
            <RefSocket name="output-socket" side="output" emit={props.emit} socketKey={key} nodeId={nodeId} payload={output.socket} />
        </div>
    )
}

const Inputs: FC<InputProps> = ({ key, input, nodeId, props }) => {
    const { RefControl, RefSocket } = Presets.classic
    return (
        <div className="absolute -left-[5px] z-10" data-id={`input-${key}`}>
            <RefSocket name="input-socket" side="input" emit={props.emit} socketKey={key} nodeId={nodeId} payload={input.socket} />
            {input && (!input.control || !input.showControl) && <div>{input.label}</div>}
            {input.control && input.showControl && <RefControl key={key} name="input-control" emit={props.emit} payload={input.control} />}
        </div>
    )
}

export const CustomNode = <Scheme extends ClassicScheme>(props: Props<Scheme>) => {
    const inputs = Object.entries(props.data.inputs)
    const outputs = Object.entries(props.data.outputs)
    const controls = Object.entries(props.data.controls)
    const selected = props.data.selected || false
    const { id, label, width, height } = props.data
    const { RefControl } = Presets.classic

    sortByIndex(inputs)
    sortByIndex(outputs)
    sortByIndex(controls)

    return (
        <div className="flex flex-row items-center">
            {inputs.map(([key, input]) => input && <Inputs key={key} input={input} nodeId={id} props={props} />)}
            <div
                className={cn('min-w-[130px] rounded-lg border-[1px] border-gray-400 bg-white p-3 shadow-sm', 'z-0 flex flex-col space-y-2 font-semibold', {
                    'border-sky-500 bg-sky-50 text-sky-500': selected,
                })}
                style={{ width, height }}
                data-node="custom-node"
                data-node-id={id}
            >
                <p className="rounded-lg bg-gradient-to-b from-[#00539F] to-[#BB1865] p-4 text-xs font-semibold uppercase text-white">{label}</p>
                <p className="font-jakarta text-xs text-[#4E545F]">Where your bot begins</p>
            </div>
            {outputs.map(([key, output]) => output && <Outputs key={key} output={output} nodeId={id} props={props} />)}
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </div>
    )
}
