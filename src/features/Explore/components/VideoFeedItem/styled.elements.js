import styled from 'styled-components'

export const Container = styled.div`
    height: 50vh;
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
export const Body = styled.div``
