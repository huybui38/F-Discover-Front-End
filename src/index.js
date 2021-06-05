import React from 'react'

import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import theme from './theme'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
        <ToastContainer />
    </ThemeProvider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
