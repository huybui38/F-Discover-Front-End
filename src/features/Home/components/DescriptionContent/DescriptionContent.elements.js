import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden;
`

export const Content = styled.p`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: #fff;
    text-shadow: 1px 1px 2px #050505;
    font-size: ${(props) => props.fontSize || '14px'};
    line-height: ${(props) => props.fontSize || '14px'};
    font-weight: ${(props) => props.fontWeight || 100};
`
