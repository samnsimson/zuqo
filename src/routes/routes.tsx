import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/dashboard'
import { LoginPage } from '../pages/login'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
])
