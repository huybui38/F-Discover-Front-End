import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 50px;
    padding: 0 ${(props) => props.padding || '18px'};
    background-color: ${(props) => props.backgroundColor || '#fff'};

    font-size: 14px;

    color: ${(props) => props.textColor || '#050505'};

    & div {
        display: flex;
        align-items: center;
    }
`
export const Logo = styled.img`
    height: 30px;
    padding: 0 8px;
`
