import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
    display: ${(props) => (props.isDisable ? 'none' : 'block')};

    height: fit-content;
    margin: 8px 0 32px 50px;
    padding: 24px 0;
    border: 1px solid ${(props) => props.theme.palette.baseLine.main};

    background-color: ${(props) => props.theme.palette.bgrColor.main};

    ${down('lg')} {
        margin: 0;
    }
`
// Header
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8px;
`
export const Author = styled.div`
    flex: 1;
    display: flex;
`
export const ButtonWrapper = styled.div`
    align-self: flex-start;
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
export const Content = styled.div`
    font-size: 14px;
`
export const Location = styled.div``

//Body
export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 16px;

    ${down('lg')} {
        width: 100vw;
    }
`
export const BodyWrapper = styled.div`
    display: flex;
    width: 750px;
    border: 1px solid ${(props) => props.theme.palette.baseLine.main};

    ${down('lg')} {
        width: 90%;
    }
`
export const VideoContainer = styled.div`
    width: 400px;

    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
        width: 260px;
        height: auto;
    }
    ${down('lg')} {
        width: 80%;
    }
`

export const VideoCard = styled.div`
    width: 70%;
`

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;

    ${down('lg')} {
        width: 20%;
    }
`
export const Option = styled.div`
    opacity: 0.8;
    cursor: pointer;
`
