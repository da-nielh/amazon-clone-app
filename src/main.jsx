import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import {initialState, reduser} from './Utility/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider reduser={reduser} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
