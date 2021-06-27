import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

//Animation
const moveLeftToRight = keyframes`
    0%{
        transform: translateX(-8px)
    }

    50%{
        transform: translateX(8px)
    }

    100%{
        transform: translateX(0)
    }
`

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 60px;
`

export const LogoWrapper = styled.div`
    & .logo {
        height: 38px;
        width: auto;

        cursor: pointer;
    }
`

export const NavbarList = styled.div`
    display: flex;
`

export const NavbarItem = styled(Link)`
    position: relative;
    margin: 0 16px;

    text-decoration: none;
    line-height: 24px;
    font-size: 15px;
    font-weight: 500;
    text-shadow: 1px 1px 2px #050505;

    list-style: none;
    color: ${(props) => props.color || 'white'};

    &::before {
        content: '';
        display: none;
        position: absolute;
        bottom: 0;
        width: 100%;

        border: 1px solid #1dd1a1;
    }

    &:hover {
        cursor: pointer;
        transform: translateY(-1px);
        transition: all 0.1s linear;

        &::before {
            display: block;
            animation: ${moveLeftToRight} 0.35s linear;
        }
    }
`
