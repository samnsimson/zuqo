import { sortByIndex } from '@/lib/utils'
import { ClassicScheme, RenderEmit, Presets } from 'rete-react-plugin'
import { Inputs } from './nodeInput'
import { Outputs } from './nodeOutput'
import { Node } from './node'

type NodeExtraData = { [x: string]: any }

type Props<S extends ClassicScheme> = {
    data: S['Node'] & NodeExtraData
    styles?: () => any
    emit: RenderEmit<S>
}

export const CustomNode = <Scheme extends ClassicScheme>(props: Props<Scheme>) => {
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
        <div className="flex flex-row items-center">
            {inputs.map(([key, input]) => input && <Inputs key={key} input={input} nodeId={id} props={props} />)}
            <Node id={id} selected={selected} label={label} />
            {outputs.map(([key, output]) => output && <Outputs key={key} output={output} nodeId={id} props={props} />)}
            {controls.map(([key, control]) => (control ? <RefControl key={key} name="control" emit={props.emit} payload={control} /> : null))}
        </div>
    )
}
