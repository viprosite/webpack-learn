import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Home.scss'

export default function Home() {
    let navigator = useNavigate()
    const handleTo = (url) => {
        navigator(url)
    }
    return (
        <div className="home__container">
            <div className="home__title">
                欢迎使用 <br />
                React Learn
            </div>
            <div className="home__button">
                <Button type='primary' size='large' onClick={() => handleTo('msgBoard')}>前往留言板</Button>
                <Button type='primary' size='large' onClick={() => handleTo('todo')}>前往待办事项</Button>
            </div>
        </div>
    )
}