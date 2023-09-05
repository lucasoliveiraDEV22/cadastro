import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyle'
import Router from './routes/routes.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Containers/Home";
import Users from "./Containers/Users"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <GlobalStyle/>
    <App/>
    </>
  </React.StrictMode>,
)


