// site url:  https://frolicking-gingersnap-95d4aa.netlify.app

import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { AppRotues } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppRotues />
        </QueryClientProvider>
    </React.StrictMode>
)
