import { sortByIndex } from '@/lib/utils'
import { CustomNodeProps } from '@/types/types'
import { ClassicScheme } from 'rete-react-plugin'

export const useNodeTemplate = <Scheme extends ClassicScheme>(props: CustomNodeProps<Scheme>) => {
    const inputs = Object.entries(props.data.inputs)
    const outputs = Object.entries(props.data.outputs)
    const controls = Object.entries(props.data.controls)
    const selected = props.data.selected || false

    sortByIndex(inputs)
    sortByIndex(outputs)
    sortByIndex(controls)

    return { inputs, outputs, controls, selected }
}
