import styled from 'styled-components'

export const Container = styled.div`
    height: fit-content;
    margin: 16px 0 16px 50px;
    padding: 24px 0;
    border: 1px solid ${(props) => props.theme.palette.baseLine.main};

    background-color: ${(props) => props.theme.palette.bgrColor.main};
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
export const Avatar = styled.a`
    & > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`
export const AuthorInfo = styled.div`
    padding: 0 8px;
`
export const FlexWrapper = styled.div`
    width: fit-content;
    height: 20px;
    display: flex;
    justify-content: space-between;

    & > p {
        margin: 0;
        margin-right: 8px;
        & > a {
            color: #000000;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`
export const Name = styled.div``
export const Date = styled.div``
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
`
export const BodyWrapper = styled.div`
    display: flex;
    width: 580px;
    height: 500px;
    border: 1px solid ${(props) => props.theme.palette.baseLine.main};
`
export const VideoContainer = styled.div`
    width: 280px;
    height: 100%;
    background-color: #eee;
    display: flex;
    align-items: center;
    & > img {
        width: 280px;
        height: auto;
    }
`
export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
`

export const Comment = styled.div`
    flex: 1;
`
