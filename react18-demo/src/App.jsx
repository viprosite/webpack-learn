import React from "react"
import { RouterProvider } from "react-router-dom"
import router from './router'

import store from '@/store'
import { Provider } from 'react-redux';

export default function App() {
   return (
      <React.StrictMode>
         <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
         </Provider>
      </React.StrictMode>
   )

}