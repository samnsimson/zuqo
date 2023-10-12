// site url:  https://frolicking-gingersnap-95d4aa.netlify.app

import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { AppRotues } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            retryDelay: 3000,
            staleTime: 1000 * 60, // 1 minute
            cacheTime: 1000 * 60, // 1 minute
            refetchOnMount: 'always',
            refetchOnWindowFocus: true,
            refetchOnReconnect: 'always',
            refetchInterval: false,
            refetchIntervalInBackground: false,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppRotues />
        </QueryClientProvider>
    </React.StrictMode>
)
