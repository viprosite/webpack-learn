import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Logo from './Logo'



const { Header, Sider, Content } = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigator = useNavigate()

    const handleClickMenuItem = e => {
        // console.log(e);
        navigator(e.key)
    }
    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed}
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}
            >
                <div className="flex">
                    <Logo />
                </div>
                <Menu
                    style={{ borderRight: 'none' }}
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['/']}
                    onClick={handleClickMenuItem}
                    items={[
                        {
                            key: '/',
                            icon: <UserOutlined />,
                            label: '首页',
                        },
                        {
                            key: '/components',
                            icon: <VideoCameraOutlined />,
                            label: '组件',
                        },

                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;