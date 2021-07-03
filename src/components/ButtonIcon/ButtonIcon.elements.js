import styled from 'styled-components'

export const Button = styled.button`
    width: ${(props) => props.width || '35px'};
    height: ${(props) => props.width || '35px'};
    border: none;
    outline: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${(props) => props.fontSize || '16px'};
    background-color: transparent;

    &:hover,
    &:active {
        background-color: rgba(89, 171, 174, 0.1);
        color: rgb(89, 171, 174);
        cursor: pointer;
    }
`
