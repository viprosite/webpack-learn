import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SmileOutlined, MessageOutlined, OrderedListOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './index.scss'

export default function TopBar() {
    const items = [
        {
            label: '欢迎页',
            key: '/',
            icon: <SmileOutlined className='menu-icon' />,
        },
        {
            label: '留言板',
            key: 'msgBoard',
            icon: <MessageOutlined className='menu-icon' />,
        },
        {
            label: '待办事项',
            key: 'todo',
            icon: <OrderedListOutlined className='menu-icon' />
        }
    ];

    let navigator = useNavigate()
    let location = useLocation()
    const [current, setCurrent] = useState('/');
    const onClick = (e) => {
        setCurrent(e.key);
        navigator(e.key)
    };

    useEffect(() => {
        if (location.pathname.length > 1) {
            setCurrent(location.pathname.slice(1))
        } else {
            setCurrent(location.pathname)
        }
    }, [location.pathname])
    return (
        <div className='topbar__container'>
            <span className='logo__name'>React Learn</span>
            <Menu className='topbar__menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

        </div>
    )
}
