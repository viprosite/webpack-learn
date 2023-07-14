import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from '@/components/Layout'
import ErrorPage from '@/views/ErrorPage'


import Home from '@/views/Home'
import Contact from '@/views/Contact'
import Edit from '@/views/Edit'

import { loader as rootLoader, action as rootAction } from '@/components/Layout'
import { loader as contactLoader, action as contactAction } from '@/views/Contact'
import { action as editAction } from '@/views/Edit'

import { deleteContact } from '@/contacts'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: 'contacts/:cid',
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction
                    },
                    {
                        path: 'contacts/:cid/edit',
                        element: <Edit />,
                        loader: contactLoader,
                        action: editAction
                    },
                    {
                        path: 'contacts/:cid/destroy',
                        // element: <Edit />,
                        // loader: contactLoader,
                        action: async (action) => {
                            // throw new Error('a')
                            await deleteContact(action.params.cid);
                            return redirect("/");
                        },
                        errorElement: <div>Oops!</div>
                    },

                ]
            }
        ]

    },

])
// console.log(router);
export default router
