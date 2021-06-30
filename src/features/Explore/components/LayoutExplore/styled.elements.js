import styled from 'styled-components'

export const Container = styled.div`
    margin: auto;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: ${(props) => props.theme.palette.bgrColor.dark};
`

export const FlexWrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
`
export const SidebarWrapper = styled.div`
    width: 25%;
    height: calc(100vh - 60px);
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
    }
`

export const MainWrapper = styled.main`
    width: 75%;
    overflow-y: scroll;
    height: calc(100vh - 60px);
    overflow: hidden;
    overflow-y: scroll;

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
`
