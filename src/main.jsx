import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes/router.jsx';
import GeneralProvider from './context/GeneralProvider.jsx';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GeneralProvider>
    <Router />
  </GeneralProvider>
)
