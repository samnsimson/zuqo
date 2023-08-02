import { create } from 'zustand'
import { combine, devtools, persist } from 'zustand/middleware'

export const useAppStore = create(
    devtools(
        persist(
            combine({ bears: 0 }, (set) => ({
                increase: (by: number) => set((state) => ({ bears: state.bears + by })),
            })),
            {
                name: 'AppStore',
            }
        )
    )
)
