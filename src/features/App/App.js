import { Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from '../../globalStyles'
import { RouterComponents } from '../../routers'
import './style.css'

function App() {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <BrowserRouter>
                <GlobalStyle />
                <RouterComponents />
            </BrowserRouter>
        </Suspense>
    )
}

export default App
