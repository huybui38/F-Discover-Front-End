/* eslint-disable react/prop-types */
import React from 'react'

import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../ButtonIcon/ButtonIcon.elements'
import ButtonWithIcons from '../ButtonWithIcons'

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const NotFound = ({ path }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/home')
    }

    return (
        <Container>
            <h2>404 - Page not found</h2>
            <p>The page you were looking for could not be found.</p>
            <p>You can try searching for something, or:</p>
            <ButtonWithIcons
                width="150px"
                padding="8px"
                background_color="#59ABAE"
                text_color="white"
                border="1px solid #59ABAE"
                animation={true}
                onClick={handleClick}
            >
                <b> Go to the homepage </b>
            </ButtonWithIcons>
        </Container>
    )
}

export default NotFound
