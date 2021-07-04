import styled from 'styled-components'

export const CommentContainer = styled.div`
    display: ${(props) => (props.disable ? 'none' : 'block')};
    flex: 1;
`
export const CommentList = styled.ul`
    height: 350px;
    list-style: none;
    padding: 0;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0px;
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
