import styled from 'styled-components'

export const StyledButton = styled.button`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    cursor: pointer;
    background: white;
    border: 1px solid #dee0e1;
    display: flex;
    justify-content: ${(props) => (props.center ? 'center' : 'unset')};
    align-items: center;
    padding: ${(props) => props.padding || '3px 3px'};
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        /* transform: scale(0.9); */
    }
`
export const TestButton = styled.button`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    cursor: pointer;
    background: white;
    border: 1px solid #dee0e1;
    display: flex;
    justify-content: ${(props) => (props.center ? 'center' : 'unset')};
    align-items: center;
    padding: ${(props) => props.padding || '3px 3px'};
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        /* transform: scale(0.9); */
    }
`
export const TestButton2 = styled.button`
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    cursor: pointer;
    background: white;
    border: 1px solid #dee0e1;
    display: flex;
    justify-content: ${(props) => (props.center ? 'center' : 'unset')};
    align-items: center;
    padding: ${(props) => props.padding || '3px 3px'};
    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        /* transform: scale(0.9); */
    }
`
export const StyledCircleButton = styled(StyledButton)`
    border-radius: 25px;
    width: 7rem;
    height: 2.5rem;
    font-size: 1.25rem;
    background-color: rgba(1, 179, 167, 1);
    margin: 10px;
    color: #ffffff;
`
