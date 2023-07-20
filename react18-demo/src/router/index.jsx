import { createBrowserRouter } from "react-router-dom";

import ErrorPage from '@/views/ErrorPage'
import Layout from '@/layout/Index'
import Home from '@/views/Home'
import MsgBoard from '@/views/MsgBoard'
import TodoList from '@/views/TodoList'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Home /> },
                    {
                        path: 'msgBoard',
                        element: <MsgBoard />
                    },
                    {
                        path: 'todo',
                        element: <TodoList />
                    }
                ]
            }

        ]
    },

]);

export default router