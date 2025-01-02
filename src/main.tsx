import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CursorConfigProvider } from './components/CustomCursor/context/CursorConfigContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CursorConfigProvider>
      <App />
    </CursorConfigProvider>
  </React.StrictMode>,
)