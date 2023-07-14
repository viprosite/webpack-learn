import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import '@/styles/index.scss'

createRoot(document.getElementById('app')).render(<App />);