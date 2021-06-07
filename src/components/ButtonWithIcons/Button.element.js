import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: ${(props) => props.width || 'auto'};
    padding: ${(props) => props.padding || '8px'};
    border-radius: 10px;

    font-size: 1.4rem;

    background-color: ${(props) => props.backgroundColor || '#fff'};
    color: ${(props) => props.textColor || '#000'};

    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transform: translateY(-2px);
        transition: all 0.1s linear;
    }
`
export const StartIcon = styled.div`
    cursor: pointer;
`

export const EndIcon = styled.div`
    cursor: pointer;
`
