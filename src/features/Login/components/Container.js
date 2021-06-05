import styled from 'styled-components'

import bg from '../../../assets/bg.jpg'

export const PageContainer = styled.div`
    display: flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    &::before {
    }
    z-index: -1;
`
export const LoginContainer = styled.div`
    background-color: rgba(235, 235, 235, 1);
    display: flex;
    width: 1000px;
    height: 500px;
`
