import { BrowserRouter } from 'react-router-dom'

import Login from './features/Login'
import { RouterComponents } from './routers'

function App() {
    return (
        // <Login></Login>
        <BrowserRouter>
            <RouterComponents />
        </BrowserRouter>
    )
}

export default App
