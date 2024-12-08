import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NavigationProvider } from './providers/navigationProvider'
import { ScoreProvider } from './providers/scoreProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <NavigationProvider>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </NavigationProvider>
)
