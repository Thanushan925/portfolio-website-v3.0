// Notes to Self:
//      - Only the App component be inside the main.jsx file
//      - Use `npm run dev` to run the React and Vite app locally

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)