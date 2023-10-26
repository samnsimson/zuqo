import { createRoot } from 'react-dom/client'
import { NodeEditor, GetSchemes, ClassicPreset } from 'rete'
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { ReactPlugin, Presets, ReactArea2D } from 'rete-react-plugin'

type Schemes = GetSchemes<ClassicPreset.Node, ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>>
type AreaExtra = ReactArea2D<Schemes>

export class Editor {
    protected flowObject: { [x: string]: any }
    constructor(
        protected container: HTMLElement,
        protected socket: ClassicPreset.Socket,
        protected editor: NodeEditor<Schemes>,
        protected area: AreaPlugin<Schemes, AreaExtra>,
        protected connection: ConnectionPlugin<Schemes, AreaExtra>,
        protected render: ReactPlugin<Schemes, AreaExtra>
    ) {
        this.flowObject = {
            nodes: [],
            connection: [],
        }
    }

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

    public addNode = async (label: string) => {
        const node = new ClassicPreset.Node(label)
        await this.editor.addNode(node)
        return node
    }

    public addNodeInput = (key: string, node: ClassicPreset.Node) => node.addInput(key, new ClassicPreset.Input(this.socket))

    public addNodeOutput = (key: string, node: ClassicPreset.Node) => node.addOutput(key, new ClassicPreset.Output(this.socket))

    public setNodePosition = async (node: any, x: number, y: number) => await this.area.translate(node.id, { x, y })

    public addConnection = async (source: ClassicPreset.Node, target: ClassicPreset.Node) => {
        await this.editor.addConnection(new ClassicPreset.Connection(source, source.id, target, target.id))
    }
    public getNodes = async () => Promise.resolve(this.editor.getNodes())

    public display = () => AreaExtensions.zoomAt(this.area, this.editor.getNodes())

    public flowInfo = () => this.flowObject
}

// export const flowEditor = async (container: HTMLElement) => {
//     const socket = new ClassicPreset.Socket('socket')
//     const editor = new NodeEditor<Schemes>()
//     const area = new AreaPlugin<Schemes, AreaExtra>(container)
//     const connection = new ConnectionPlugin<Schemes, AreaExtra>()
//     const render = new ReactPlugin<Schemes, AreaExtra>({ createRoot })

//     AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
//         accumulating: AreaExtensions.accumulateOnCtrl(),
//     })

//     // Presets
//     render.addPreset(Presets.classic.setup())
//     connection.addPreset(ConnectionPresets.classic.setup())

//     editor.use(area)
//     area.use(connection)
//     area.use(render)

//     AreaExtensions.simpleNodesOrder(area)

//     const a = new ClassicPreset.Node('A')
//     a.addControl('a', new ClassicPreset.InputControl('text', { initial: 'a' }))
//     a.addOutput('a', new ClassicPreset.Output(socket))
//     await editor.addNode(a)

//     const b = new ClassicPreset.Node('B')
//     b.addControl('b', new ClassicPreset.InputControl('text', { initial: 'b' }))
//     b.addInput('b', new ClassicPreset.Input(socket))
//     await editor.addNode(b)

//     await editor.addConnection(new ClassicPreset.Connection(a, 'a', b, 'b'))

//     await area.translate(a.id, { x: 0, y: 0 })
//     await area.translate(b.id, { x: 270, y: 0 })

//     setTimeout(() => {
//         AreaExtensions.zoomAt(area, editor.getNodes())
//     }, 10)

//     return {
//         destroy: () => area.destroy(),
//     }
// }
