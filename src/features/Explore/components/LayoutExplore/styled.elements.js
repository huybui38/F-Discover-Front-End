import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    margin: auto;
    height: 100vh;

    overflow-x: hidden;
    overflow-y: hidden;
    background-color: ${(props) => props.theme.palette.bgrColor.dark};
`

export const FlexWrapper = styled.div`
    position: relative;

    padding: 0 calc(calc(100% - 1200px) / 2);
    width: 1200px;
    height: calc(100% - 60px);
    overflow-y: scroll;

    display: flex;
    justify-content: flex-end;
`
export const SidebarWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: calc(calc(100% - 1200px) / 2);
    z-index: 1;

    width: calc(1200px / 4);
    height: calc(100vh - 60px);
    overflow: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px transparent;
        border-radius: 50%;
    }

    &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.palette.primary.main};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.palette.primary.dark};
    }

    ${down('lg')} {
        display: none;
    }
`

export const MainWrapper = styled.main`
    width: 75%;

    &::-webkit-scrollbar {
        width: 0px;
        height: 5;
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
    }

    ${down('lg')} {
        width: 100%;
    }
`
