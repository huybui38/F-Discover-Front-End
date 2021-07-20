import { up, only } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;

    ${up('lg')} {
        display: none;
    }

    ${only('lg')} {
        display: block;
    }
`
export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;

    background-image: url('https://images.pexels.com/photos/5334878/pexels-photo-5334878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
export const WrapperBrn = styled.div`
    position: relative;
`
export const ButtonExplore = styled.div`
    position: absolute;
    top: 50px;
`

export const Slogan = styled.div`
    position: absolute;
    top: 20%;
    left: 18px;

    width: 80%;
    height: auto;

    font-size: 14px;
    text-shadow: 1px 1px 2px #000;
    color: #fff;

    & p {
        padding-top: 8px;
        width: 70%;
    }

    ${up('sm')} {
        left: 48px;
    }
`
