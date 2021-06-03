import React from 'react'

import { Background } from './components/Background'

import { infoImageHome } from '../../utils/infoImageHome'

export const Home = () => {
    return (
        <div>
            <Background srcList={infoImageHome} />
        </div>
    )
}

export default Home
