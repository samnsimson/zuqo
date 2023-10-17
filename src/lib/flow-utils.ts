import { createRoot } from 'react-dom/client'
import { NodeEditor, GetSchemes, ClassicPreset } from 'rete'
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { ReactPlugin, Presets, ReactArea2D } from 'rete-react-plugin'

type Schemes = GetSchemes<ClassicPreset.Node, ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>>
type AreaExtra = ReactArea2D<Schemes>

export class Editor {
    constructor(
        protected container: HTMLElement,
        protected socket: ClassicPreset.Socket,
        protected editor: NodeEditor<Schemes>,
        protected area: AreaPlugin<Schemes, AreaExtra>,
        protected connection: ConnectionPlugin<Schemes, AreaExtra>,
        protected render: ReactPlugin<Schemes, AreaExtra>
    ) {}

    static init = async (container: HTMLElement) => {
        const socket = new ClassicPreset.Socket('socket')
        const editor = new NodeEditor<Schemes>()
        const area = new AreaPlugin<Schemes, AreaExtra>(container)
        const connection = new ConnectionPlugin<Schemes, AreaExtra>()
        const render = new ReactPlugin<Schemes, AreaExtra>({ createRoot })

        AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
            accumulating: AreaExtensions.accumulateOnCtrl(),
        })

        render.addPreset(Presets.classic.setup())
        connection.addPreset(ConnectionPresets.classic.setup())

        editor.use(area)
        area.use(connection)
        area.use(render)

        AreaExtensions.simpleNodesOrder(area)

        return new Editor(container, socket, editor, area, connection, render)
    }

    public destroy = () => this.area.destroy()

    public addNode = async (key: string, label: string) => {
        const node = new ClassicPreset.Node(label)
        node.addControl(key, new ClassicPreset.InputControl('text', { initial: key }))
        node.addOutput(key, new ClassicPreset.Output(this.socket))
        await this.editor.addNode(node)
        return node
    }

    public setNodePosition = async (node: any, x: number, y: number) => {
        console.log(node)
        await this.area.translate(node.id, { x, y })
    }

    public display = () => {
        AreaExtensions.zoomAt(this.area, this.editor.getNodes())
    }
}

export const flowEditor = async (container: HTMLElement) => {
    const socket = new ClassicPreset.Socket('socket')
    const editor = new NodeEditor<Schemes>()
    const area = new AreaPlugin<Schemes, AreaExtra>(container)
    const connection = new ConnectionPlugin<Schemes, AreaExtra>()
    const render = new ReactPlugin<Schemes, AreaExtra>({ createRoot })

    AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
        accumulating: AreaExtensions.accumulateOnCtrl(),
    })

    // Presets
    render.addPreset(Presets.classic.setup())
    connection.addPreset(ConnectionPresets.classic.setup())

    editor.use(area)
    area.use(connection)
    area.use(render)

    AreaExtensions.simpleNodesOrder(area)

    const a = new ClassicPreset.Node('A')
    a.addControl('a', new ClassicPreset.InputControl('text', { initial: 'a' }))
    a.addOutput('a', new ClassicPreset.Output(socket))
    await editor.addNode(a)

    const b = new ClassicPreset.Node('B')
    b.addControl('b', new ClassicPreset.InputControl('text', { initial: 'b' }))
    b.addInput('b', new ClassicPreset.Input(socket))
    await editor.addNode(b)

    await editor.addConnection(new ClassicPreset.Connection(a, 'a', b, 'b'))

    await area.translate(a.id, { x: 0, y: 0 })
    await area.translate(b.id, { x: 270, y: 0 })

    setTimeout(() => {
        AreaExtensions.zoomAt(area, editor.getNodes())
    }, 10)

    return {
        destroy: () => area.destroy(),
    }
}
