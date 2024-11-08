import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NewData } from './components/NewData.jsx'
import { DataView } from './components/DataView.jsx'
import { Fetch } from './components/Fetch.jsx'
import { Api } from './components/Api.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NewData/>
    <DataView/>
    <Fetch/>

<Api/>




  </StrictMode>,
)
