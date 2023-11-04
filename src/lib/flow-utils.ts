import { CustomSocket } from '@/components/ui/editor/socket'
import { CustomNode } from '@/components/ui/editor/customNode'
import { createRoot } from 'react-dom/client'
import { NodeEditor, GetSchemes, ClassicPreset } from 'rete'
import { AreaPlugin, AreaExtensions } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { ReactPlugin, Presets, ReactArea2D } from 'rete-react-plugin'
import { CustomConnection } from '@/components/ui/editor/connection'
import { StartNode } from '@/components/ui/editor/startNode'
import { NotesNode } from '@/components/ui/editor/notes'
// import { AutoArrangePlugin, Presets as ArrangePresets, ArrangeAppliers } from 'rete-auto-arrange-plugin'

interface Node extends ClassicPreset.Node {}
interface Connection<N extends Node> extends ClassicPreset.Connection<N, N> {}
type Schemes = GetSchemes<Node, Connection<Node>>
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
    ) // protected arrange: AutoArrangePlugin<Schemes>
    {
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
        // const arrange = new AutoArrangePlugin<Schemes>()

        AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
            accumulating: AreaExtensions.accumulateOnCtrl(),
        })

        render.addPreset(
            Presets.classic.setup({
                customize: {
                    node({ payload: { label } }) {
                        if (label === 'start') return StartNode
                        if (label === 'custom') return CustomNode
                        if (label === 'notes') return NotesNode
                        return CustomNode
                    },
                    socket() {
                        return CustomSocket
                    },
                    connection() {
                        return CustomConnection
                    },
                },
            })
        )
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

    // public format = () => this.arrange.layout()
}
