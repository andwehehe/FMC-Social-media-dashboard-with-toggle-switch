import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global styles/global-styles.css'
import './global styles/theme.css'
import './global styles/variables.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
