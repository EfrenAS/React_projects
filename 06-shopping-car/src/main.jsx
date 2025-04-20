import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { FiltersProvider } from './context/filters'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FiltersProvider>
)
