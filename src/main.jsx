import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyle'
import Router from './routes/routes.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    <GlobalStyle/>
    </>
  </React.StrictMode>,
)


