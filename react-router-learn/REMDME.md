## jsx路由思路（只能使用非 dataAPI）：
- 入口文件 createRoot - render(App)
- App.jsx:
```javascript
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
```





## 类Vue路由表思路（可以使用dataAPI）：
- 入口文件 createRoot - render(App)

- App.jsx:
``` javascript
    RouterProvider组件注入路由表router
    <RouterProvider router={router} />
```

- router.jsx: 路由表文件
> 根路径作为layout，其他路由作为其子路由共享layout，在layout内容区<Outlet/>作为视图出口
> index:true 作为默认显示组件
``` javascript
{
    path:/, element: <Layout/>,children:[
        {errorElement: <ErrorPage/>, children:[
            {index: true, element: <Dashboard/>},
            {path:'/xxx', element:....}
        ]}
    ]
}
```

## 要点
**webpack** 
1. output - `publicPath: / `  [history模式，子路由下请求的bundle.js是从 / 寻址，避免404]
2. devServer - `historyApiFallback:true`
3. resolve - `alias - @:src`
4. @babel/preset-react, {runtime:'automatic'} [所有react子组件都需要手动引入React，否则报错 React is not defined ]

