import { create } from 'zustand'
import { combine, devtools, persist } from 'zustand/middleware'

interface StateProps {
    authenticated: boolean
    credentials: { username: string; password: string }
    sidebarActiveIconIndex: string
    activeModelIndex: number
    nodeInfo: Array<any>
}

const defaultCredentials = { username: 'admin', password: 'admin' }

const initialState: StateProps = {
    authenticated: false,
    credentials: defaultCredentials,
    sidebarActiveIconIndex: '',
    activeModelIndex: 0,
    nodeInfo: [],
}

export const useAppStore = create(
    devtools(
        persist(
            combine(initialState, (set) => ({
                authenticate: (value: boolean) => set(() => ({ authenticated: value })),
                setSidebarIndex: (value: string) => set(() => ({ sidebarActiveIconIndex: value })),
                setActiveModelIndex: (value: number) => set(() => ({ activeModelIndex: value })),
                setNodeInfo: (value: any) => set(({ nodeInfo }) => ({ nodeInfo: [...nodeInfo, value] })),
            })),
            {
                name: 'AppStore',
                // partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['authenticated'].includes(key))),
            }
        )
    )
)
