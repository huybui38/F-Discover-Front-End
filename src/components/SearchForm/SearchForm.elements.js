import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;

    margin-right: 16px;
    margin-left: ${(props) => props.width || '166px'};
    border-radius: 25px;

    font-size: ${(props) => props.fontSize || '14px'};

    background-color: white;
    overflow: hidden;

    &:hover {
        margin-left: 16px;
        cursor: pointer;
        & .home__search-form {
            display: block;
        }
    }
`
export const Input = styled.input`
    display: none;

    width: ${(props) => props.width || '150px'};
    height: ${(props) => props.height || '24px'};
    padding-left: 16px;
    margin: auto;
    border: none;
    outline: none;

    line-height: 10px;

    color: #050505;
    background-color: transparent;
`

export const IconSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    border: none;
    outline: none;

    background-color: transparent;
    cursor: pointer;
`
