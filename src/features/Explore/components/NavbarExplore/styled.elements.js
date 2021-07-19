import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const NavBar = styled.div`
    /* padding: calc(1vw + 1vh); */
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    max-width: 1200px;
    margin: auto;

    & .sidebar--disable {
        transform: translateX(-100%);
    }
    & .sidebar--disable > .sidebar__overlay {
        display: none;
    }
`
export const LogoWrapper = styled.div`
    ${down('sm')} {
        display: none;
    }
`
export const SearchWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ActionWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const Logo = styled.img`
    margin: auto;
    width: auto;
    height: 40px;
`
export const IconWrapper = styled.div`
    position: relative;
    margin-left: 8px;
    height: 30px;
    width: 30px;
    font-size: 18px;
    color: #000000;

    & .sidebar__list--disable {
        position: absolute;
        top: 25%;
        left: 0;

        opacity: 0;
        z-index: -1;
        transform: rotate(180deg);
    }

    & .sidebar__list--active {
        position: absolute;
        top: 25%;
        left: 0;

        opacity: 1;
        z-index: 1;
        transform: rotate(0);
        transition: all 0.3s linear;
        display: block;
    }

    & .sidebar__back--disable {
        position: absolute;
        top: 25%;
        left: 0;

        opacity: 0;
        z-index: -1;
        transform: rotate(-180deg);
    }

    & .sidebar__back--active {
        position: absolute;
        top: 25%;
        left: 0;

        opacity: 1;
        transform: rotate(0);
        transition: all 0.3s linear;
        z-index: 1;
    }
`
export const SidebarWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 3;

    width: 100%;
    border-top: 2px solid #59abae;

    transform: translateX(0);
    transition: all 0.3s linear;
`
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 200%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
`
