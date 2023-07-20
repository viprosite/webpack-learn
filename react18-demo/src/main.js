import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import "u-reset.css";
import '@/styles/index.scss'


createRoot(document.getElementById('app')).render(<App />);