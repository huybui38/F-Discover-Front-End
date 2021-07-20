import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: ${(props) => props.width || '250px'};
    height: 100vh;

    font-size: 16px;
    font-weight: 500;

    color: #000;
    text-shadow: none;
    background-color: #fff;
`
export const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div > .logo {
        height: 60px;
        width: auto;
        cursor: pointer;
    }
    & > div > .logoTitle {
        height: 30px;
        width: auto;

        cursor: pointer;
    }
`
export const GroupSocialBtn = styled.div`
    justify-content: center;
    width: 100%;
    height: 60px;

    border-bottom: 1px solid #000;
`

export const SidebarList = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;

    & .sidebar__item--active {
        background-color: #59abae;
        color: #fff;
    }
`

export const SidebarItem = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;

    margin: 8px 0;
    padding: 16px ${(props) => props.padding || '18px'};

    & span {
        margin: 0 16px;
    }

    &:hover,
    &:active {
        cursor: pointer;
        background-color: #59abae;
        color: #fff;
    }
`
export const SuggestUserWrapper = styled.div`
    height: 55vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    padding-top: 16px;
    padding-left: 18px;

    overflow-y: scroll;
`
export const UserSuggestList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
`

export const TitleList = styled.span`
    display: block;
    padding-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
`

export const Action = styled.div`
    display: block;

    font-size: 14px;
    font-weight: 500;

    color: ${(props) => props.theme.palette.secondary.dark};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        font-weight: 600;
    }
`
