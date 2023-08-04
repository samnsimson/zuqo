import { createBrowserRouter } from 'react-router-dom'
import { LoginPage } from '@/pages/login'
import { Dashboard } from '@/pages/dashboard'
import { OverviewPage } from '@/pages/dashboard/overview'
import { WorkflowStudio } from '@/pages/dashboard/workflow-studio'
import { InteractionCenterPage } from '@/pages/dashboard/interaction-center'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/overview',
                element: <OverviewPage />,
            },
            {
                path: '/workflow-studio',
                element: <WorkflowStudio />,
            },
            {
                path: '/interaction-center',
                element: <InteractionCenterPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
])
