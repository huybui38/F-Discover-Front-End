import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 100px;
    /* height: calc(100vh - 60px);
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 1px;
        height: 10px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.palette.primary.dark};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.palette.primary.dark};
    } */
`
export const ListOption = styled.ul`
    list-style: none;
    padding: 0;
`

export const OptionItem = styled(Link)`
    display: flex;
    align-items: center;

    height: 30px;
    padding: 8px 0;
    text-align: left;

    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    color: #000000;

    & > svg {
        margin-top: 3px;
        margin-left: 8px;
        margin-right: 8px;
    }

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.palette.primary.dark};
        background-color: ${(props) => props.theme.palette.bgrHover.main};
        text-decoration: underline;
    }
`
export const UserSuggestList = styled.div`
    width: 100%;
`

export const TitleList = styled.span`
    display: block;
    padding: 0 8px;
    font-size: 16px;
    font-weight: 600;
`
export const SuggestUserWrapper = styled.div`
    padding-top: 16px;
`
export const Action = styled.div`
    display: block;

    padding: 0 8px;
    font-size: 14px;
    font-weight: 500;

    color: ${(props) => props.theme.palette.secondary.dark};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        font-weight: 600;
    }
`
