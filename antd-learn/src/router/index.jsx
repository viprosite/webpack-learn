import { createBrowserRouter } from "react-router-dom";

import Layout from '@/layout/Layout'
import ErrorPage from '@/views/ErrorPage'
import Dashboard from "@/views/Dashboard"
import Components from '@/views/Components'
import Login from '@/views/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />, children: [
                    { index: true, element: <Dashboard /> },
                    { path: '/components', element: <Components /> }

                ]
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    }
])

export default router