import styled from 'styled-components'

export const Wrapper = styled.div`
    font-size: ${(props) => props.fontSize || '14px'};
    display: flex;
    background-color: white;
    overflow: hidden;

    margin-right: 16px;
    margin-left: ${(props) => props.width || '166px'};
    border-radius: 25px;

    &:hover {
        margin-left: 16px;
        cursor: pointer;
        & .home__search-form {
            display: block;
        }
    }
`
export const Input = styled.input`
    width: ${(props) => props.width || '150px'};
    height: ${(props) => props.height || '24px'};
    padding-left: 16px;
    margin: auto;
    line-height: 10px;

    color: #050505;
    border: none;
    outline: none;
    background-color: transparent;

    display: none;
`

export const IconSearch = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
`
