import styled from 'styled-components'

export const Wrapper = styled.div`
    font-size: ${(props) => props.fontSize || '1.4rem'};
    display: flex;
    background-color: white;
    overflow: hidden;

    margin-right: 1.6rem;
    margin-left: ${(props) => props.width || '16.6rem'};
    border-radius: 25px;

    &:hover {
        margin-left: 1.6rem;
        cursor: pointer;
        & .home__search-form {
            display: block;
        }
    }
`
export const Input = styled.input`
    width: ${(props) => props.width || '15rem'};
    height: ${(props) => props.height || '2.4rem'};
    padding-left: 1.6rem;
    margin: auto;
    line-height: 1rem;

    color: #050505;
    border: none;
    outline: none;
    background-color: transparent;

    display: none;
`

export const IconSearch = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
`
