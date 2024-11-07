import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Api } from './assets/components/Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<Api/>

  </StrictMode>,
)
