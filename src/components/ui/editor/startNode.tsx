import { sortByIndex } from '@/lib/utils'
import { CustomNodeProps } from '@/types/types'
import { ClassicScheme, Presets } from 'rete-react-plugin'
import { Inputs } from './nodeInput'
import { Outputs } from './nodeOutput'
import { Node } from './node'

export const StartNode = <Scheme extends ClassicScheme>(props: CustomNodeProps<Scheme>) => {
    const inputs = Object.entries(props.data.inputs)
    const outputs = Object.entries(props.data.outputs)
    const controls = Object.entries(props.data.controls)
    const selected = props.data.selected || false
    const { id, label } = props.data
    const { RefControl } = Presets.classic

    sortByIndex(inputs)
    sortByIndex(outputs)
    sortByIndex(controls)

    return (
        <div className="flex flex-row items-center space-x-4">
            <div className="rounded-lg border-2 bg-white">Start here</div>
            {inputs.map(([key, input]) => input && <Inputs key={key} input={input} nodeId={id} props={props} />)}
            <Node label={label} id={id} selected={selected}>
                <p className="font-jakarta text-xs text-[#4E545F]">Where your bot begins</p>
            </Node>
            {outputs.map(([key, output]) => output && <Outputs key={key} output={output} nodeId={id} props={props} />)}
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </div>
    )
}
