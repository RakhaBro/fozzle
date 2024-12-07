import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NavigationProvider } from './providers/navigationProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NavigationProvider>
      <App />
    </NavigationProvider>
)
