import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import './index.scss'

export default function Layout() {
    return (
        <div className="layout__container">
            <TopBar />
            <div className="app__content">
                <Outlet />
            </div>
        </div>
    )
}