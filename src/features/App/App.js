import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from '../../globalStyles'
import { RouterComponents } from '../../routers'
import './style.css'

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <RouterComponents />
        </BrowserRouter>
    )
}

export default App
