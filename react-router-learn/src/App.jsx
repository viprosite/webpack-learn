// data-api 配合路由表：===========
// import * as React from 'react';
// import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
// import router from './router'

// export default function App(){
//     return (
//         <React.StrictMode>
//             <RouterProvider router={router} />
//         </React.StrictMode>
//     )
// }





// 非 data - api 示例：jsx路由表 =========================
import * as React from 'react';
import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Layout1 from '@/components/Layout1'
import ErrorPage from '@/views/ErrorPage'
// import Home from '@/views/Home'
// import Contact from '@/views/Contact'
// import Config from '@/views/Config'
// import Users from '@/views/User'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout1 />} errorElement={<ErrorPage />}>
                    {/* <Route errorElement={<ErrorPage />}>
                        <Route index element={<Home />} />
                        <Route path='contacts/:cid' element={<Contact />} />
                    </Route> */}
                </Route>
                {/* <Route path='/config' element={<Config />}>
                    <Route path='Users' element={<Users />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    )
}