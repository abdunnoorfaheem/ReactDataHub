import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Fetch } from './components/Fetch.jsx'
import { Api } from './components/Api.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Fetch/>

<Api/>




  </StrictMode>,
)
