import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import WithProviders from './utils/context/withProviders.jsx'

import './index.css'



const root = document.getElementById('root')
createRoot(root).render(
  <StrictMode>
    <WithProviders>
      <App />
    </WithProviders>
  </StrictMode>,
)
