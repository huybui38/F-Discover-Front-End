import styled from 'styled-components'

export const Card = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const CardImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-position: center;
`
