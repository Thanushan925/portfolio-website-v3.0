// Notes to Self:
//      - Only the App component be inside the main.jsx file
//      - Use `npm run dev` to run the React and Vite app locally

// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

// CSS Styling
import './index.css'

// Components
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)