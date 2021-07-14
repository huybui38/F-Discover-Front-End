import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid ${(props) => props.theme.palette.baseLine.main};
`
export const Author = styled.div`
    flex: 1;
    display: flex;
    padding: 0 8px;
    padding-top: 8px;
`
export const AuthorInfo = styled.div`
    padding: 0 8px;
`
export const FlexWrapper = styled.div`
    width: fit-content;
    margin: 4px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
        display: block;
        margin: 0;
        margin-right: 8px;
    }
`
export const Main = styled.div`
    width: 400px;
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
    word-wrap: break-word;
`
export const Content = styled.div`
    height: fit-content;
    padding: 8px;
`
export const TextBox = styled.div`
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
`
export const VideoContainer = styled.div`
    width: 100%;
    min-height: 500px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    ${down('lg')} {
        width: 100%;
    }
`

export const VideoCard = styled.div`
    width: 70%;
    & > img {
        width: 100%;
        height: auto;
    }
`
export const ButtonSave = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`
