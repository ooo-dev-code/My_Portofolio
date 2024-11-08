import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./scenes/Home/components/index.css"
import "./scenes/Resume/components/index.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
