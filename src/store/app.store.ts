import { create } from 'zustand'
import { combine, devtools, persist } from 'zustand/middleware'

const initialState = {
    bears: 0,
    authenticated: false,
    credentials: {
        username: 'admin',
        password: 'admin',
    },
}

export const useAppStore = create(
    devtools(
        persist(
            combine(initialState, (set) => ({
                increase: (by: number) => set((state) => ({ bears: state.bears + by })),
                authenticate: (value: boolean) => set(() => ({ authenticated: value })),
            })),
            {
                name: 'AppStore',
                // partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['authenticated'].includes(key))),
            }
        )
    )
)
