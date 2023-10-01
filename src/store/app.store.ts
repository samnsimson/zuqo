import { create } from 'zustand'
import { combine, devtools, persist } from 'zustand/middleware'

interface StateProps {
    authenticated: boolean
    credentials: { username: string; password: string }
    sidebarActiveIconIndex: string
}

const defaultCredentials = { username: 'admin', password: 'admin' }

const initialState: StateProps = {
    authenticated: false,
    credentials: defaultCredentials,
    sidebarActiveIconIndex: '',
}

export const useAppStore = create(
    devtools(
        persist(
            combine(initialState, (set) => ({
                authenticate: (value: boolean) => set(() => ({ authenticated: value })),
                setSidebarIndex: (value: string) => set(() => ({ sidebarActiveIconIndex: value })),
            })),
            {
                name: 'AppStore',
                // partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['authenticated'].includes(key))),
            }
        )
    )
)
